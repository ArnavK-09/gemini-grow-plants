// imports
import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import ShareButton from "../islands/ShareButton.tsx";

// Results Type
interface PlantData {
  emoji: string;
  name: string;
  note: string;
  growth_time: string;
}

/**
 * Validate Data
 */
export const handler: Handlers<PlantData[]> = {
  GET(req, ctx) {
    // get data
    const url = new URL(req.url);
    const data = url.searchParams.get("data") || "";

    // if not data redirect
    if (!data || data.trim().length == 0) {
      return ctx.renderNotFound();
    }

    try {
      // intrepret data
      const results: PlantData[] = JSON.parse(
        decodeURIComponent(atob(data)),
      );

      // return data
      return ctx.render(results);
    } catch {
      return ctx.renderNotFound();
    }
  },
};

/**
 * Results page for plants
 */
export default function ({ data }: PageProps<PlantData[]>) {
  return (
    <>
      {/* Meta Tags  */}
      <Head>
        <title>Your Results</title>
      </Head>

      {/* Hero  */}
      <div class="select-none py-10 h-fit bg-[#22c55ed3]">
        <div class="my-16 text-center">
          <div class="w-full">
            <div className="text-center">
              <h1 class="text-5xl text-green-950 font-extrabold break-words">
                Plantation Suggested
              </h1>
              <div class="grid place-items-center">
                <p class="select-text max-w-lg py-6 break-words text-green-900 font-medium text-sm md:text-md md:font-bold tracking-tight">
                  Welcome to your <strong class="mx-0.5">personalized</strong>
                  plant recommendations, powered by
                  <strong class="mx-0.5">AI</strong>! By growing these plants,
                  you're not only enhancing your surroundings but also
                  <strong class="mx-0.5">contributing</strong>
                  to the well-being of our planet. Remember, plants are our
                  <strong class="mx-0.5">best friends</strong>. These
                  <strong class="mx-0.5">recommendations</strong>
                  are tailored to your location and local weather, so you can
                  nurture these green companions with confidence. Let's
                  <strong class="mx-0.5">grow together</strong> and make a
                  <strong class="mx-0.5">positive</strong>{" "}
                  impact on Earth! Scoll Down {":)"}
                </p>
              </div>
            </div>
            {/* Share Button  */}
            <ShareButton />
          </div>
        </div>
      </div>
      {/* Hero end  */}

      {/* Results Starts  */}
      <section className="my-10 grid  place-items-center">
        <div class="px-4 md:px-0 grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.map((x: PlantData) => (
            <div class="w-full hover:shadow-2xl md:hover:scale-105 transition card py-2 md:w-96 select-none bg-base-300 shadow-xl">
              <figure>
                <h2 class="select-none text-9xl rounded-full my-1 bg-white/5 px-1.5 py-2 aspect-square">
                  {x.emoji}
                </h2>
              </figure>
              <div class="card-body">
                <h2 class="card-title underline underline-offset-8 select-text">
                  {x.name}
                </h2>
                <h3 class="tracking-tight font-5xl font-bold mt-4 border-white border w-fit rounded-md px-3 py-1">
                  ⏰ {x.growth_time}
                </h3>
                <p class="mt-2 select-all mb-4 opacity-90 font-semibold tracking-wide break-words">
                  {x.note}
                </p>
                <div class="card-actions justify-center">
                  <a
                    target="_blank"
                    href={`https://google.com/search?q=How to grow ${x.name} at home?`}
                    class="select-none text-center inline rounded-lg hover:scale-105 transition ease-in-out hover:shadow-xl cursor-pointer text-xl w-full font-bold tracking-tight font-xl bg-[#22c55e] text-green-950 border-green-950 border-2 px-5 py-1.5"
                    aria-label="how-to-grow"
                  >
                    Guide To Grow
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Results End  */}
    </>
  );
}
