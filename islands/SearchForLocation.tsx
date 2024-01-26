// deno-lint-ignore-file no-explicit-any
import { type Signal, useSignal } from "@preact/signals";
import LocationButton from "./LocationButton.tsx";

// Props Type
interface Props {
  location: Signal<string>;
}

// Location Scheme
export interface LocationScheme {
  id: number;
  name: string;
  latitude: number;
  longitude: 76.8504;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  admin2_id: number;
  timezone: string;
  population: number;
  country_id: number;
  country: string;
  admin1: string;
  admin2: string;
}

/**
 * Fetch locations from query
 * @param query
 */
async function fetchData(query: string) {
  if (query.trim().length < 2) return [];
  const req = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${query}`,
  );
  const data = await req.json();
  return data.results ?? [];
}

/**
 * Search Location
 */
export default function Counter(props: Props) {
  const data = useSignal<any[]>([]);

  /**
   * To settle input query
   */
  const findLocations = async (e: any) => {
    props.location.value = e.currentTarget.value ?? "";
    const r = await fetchData(props.location.value);
    data.value = r
  };

  return (
    <div>
      {/* Input  */}
      <input
        type="text"
        placeholder="Enter Your Location..."
        onInput={findLocations}
        class="input input-bordered w-full max-w-2xl text-white"
      />
      {/* Input End  */}
      {/* Results Grid  */}
      <div class="w-full mt-7">
        <div class="grid md:grid-cols-2 grid-cols-1 gap-2.5 md:gap-4">
          {data.value.map((x) => (
            <LocationButton
            longitude={x.longitude}
            latitude={x.latitude}
            name={x.name}
            country={x.country}
          />
          ))}
        </div>
      </div>
      {/* Results End  */}
    </div>
  );
}
