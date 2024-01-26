// imports

import { isLoading } from "../store.ts";

// Props Type
interface Props {
  latitude: number | string;
  longitude: number | string;
  name: string;
  country: string;
}

/**
 * Search Location
 */
export default function LocationButton(
  { latitude = 0, longitude = 0, country, name }: Props,
) {
  /**
   * Fetched data for location
   */
  const handleLocation = async () => {
    isLoading.value = true;
    await fetch(`/api`, {
      method: "POST",
      body: JSON.stringify({
        longitude: longitude,
        latitude: latitude,
      }),
    }).then((response) => {
      isLoading.value = false;
      if (response.redirected) {
        window.location.href = response.url;
      }
    }).catch((e) => {
      isLoading.value = false;
      alert(e);
    });
  };

  return (
    <button
      type="button"
      onClick={handleLocation}
      class="btn btn-lg text-white break-words join-item"
    >
      {name} - {country}
    </button>
  );
}
