// imports
import { Handlers } from "$fresh/server.ts";
import { LocationScheme } from "../../islands/SearchForLocation.tsx";
import { GoogleGenerativeAI } from "https://esm.sh/@google/generative-ai@0.1.3";

// New Instance
const genAI = new GoogleGenerativeAI(Deno.env.get("API_KEY") ?? "");

// Prompt for Gemini
const PROMPT =
  `Act as an farmer, Botanist and help to suggest at least 1 or max 10 vegetables, fruits or any other plants that can be grown with minimum time span. makes sure to analyze weather data below of location and suggest plantation that can be grown well in that weather. include plant name, type of it, growth time, emoji & extra medium-length note for it, in JSON Array format following scheme below, without including it in code block.

  FOLLOW THIS SCHEME:-
  {
  "emoji":"appropirate emoji according to plant",
  "name": "Plant Name",
  "type": "Plant Type",
  "growth_time": "Growth timings in string",
  "note": "Extra Note"
  },
  
  WEATHER DATA:-
  `;

/**
 * Ask google gemini for data
 * @param data
 * @returns
 */
async function getDataForPlants(data: object) {
  // For text-only input, use the gemini-pro model
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  // get result
  const result = await model.generateContent(PROMPT + JSON.stringify(data));
  const response = await result.response;
  const res = response.text();

  // return result
  return JSON.parse(res.replaceAll("`", "").trim());
}

/**
 * Handler for API
 */
export const handler: Handlers<LocationScheme> = {
  async POST(req, _ctx) {
    // get data
    const prms = await req.json().catch((e) => {
      return new Response(null, {
        status: 400,
        statusText: e.message,
      });
    });

    // parse data
    const latitude = prms.latitude;
    const longitude = prms.longitude;

    // verify
    if ((longitude == undefined) || (latitude == undefined)) {
      return new Response(null, {
        status: 400,
        statusText: "Coordinates Missing!",
      });
    }

    // get weather info
    const weatherReq = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&past_days=14`,
    );
    const weatherData = await weatherReq.json();

    // get response from ai
    const RESULTS = await getDataForPlants(weatherData);
    // encrypt data
    const encryptedData = btoa(encodeURIComponent(JSON.stringify(RESULTS)));

    // todo replace in prod.
    // Redirect user to thank you page.
    const headers = new Headers();
    headers.set(
      "location",
      `/results?data=${encryptedData}`,
    );
    return new Response(null, {
      status: 301, // See Other
      headers,
    });
  },
  GET(_, ctx) {
    return Response.redirect(ctx.url.origin, 302);
  },
};
