// imports
import { useSignal } from "@preact/signals";
import SearchForLocation from "../islands/SearchForLocation.tsx";

/**
 * Main Page For Website
 */
export default function () {
  const count = useSignal<string>("");
  return (
    <>
      <div class="bg_pattern hero min-h-screen backdrop-blur-md bg-base-200">
        <div class="select-none hero-content text-center">
          <div class="w-full text-center mt-20">
            <div className="w-full mx-auto">
              <img
                loading="lazy"
                class="h-40 md:h-72 scale-90 mb-2 my-1 mx-auto w-auto"
                src="/logo.webp"
                alt="hero"
              />
            </div>
            <h1 class="text-5xl font-extrabold text-green-950">
              Plant More Trees
            </h1>
            <p class="py-6 select-text bg-white/5 backdrop-blur-sm p-2 shadow my-2 rounded-lg md:brightness-110 text-green-900 md:tracking-wide md: font-medium md:text-md text-sm break-words max-w-md">
              Welcome to our website, where you'll discover a curated selection
              of {" "}<strong>plantation</strong>{" "}
              plants perfectly suited to your local climate. Leveraging live
              weather data and the power of{" "}
              <strong>AI</strong>, we make it simple to find and{" "}
              <strong>grow greenery</strong>{" "}
              that thrives quickly and effortlessly in your environment. Welcome
              to a world where gardening meets innovation.
            </p>
            <SearchForLocation location={count} />
          </div>
        </div>
      </div>
    </>
  );
}
