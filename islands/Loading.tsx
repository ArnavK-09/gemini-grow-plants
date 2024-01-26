// store
import { isLoading } from "../store.ts";

/**
 * Loading screen for website
 */
export default function () {
  return (
    <>
      {isLoading.value && (
        <section class="flex justify-center items-center z-40 p-auto h-screen w-screen bg-black/50 fixed left-0 top-0">
          <div>
            <div class="p-3 animate-spin drop-shadow-2xl bg-gradient-to-bl from-emerald-600 via-yellow-500 to-green-600 md:w-48 md:h-48 h-32 w-32 aspect-square rounded-full">
              <div class="text-3xl grid place-items-center rounded-full h-full w-full bg-zinc-900 background-blur-md">
                🌲
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
