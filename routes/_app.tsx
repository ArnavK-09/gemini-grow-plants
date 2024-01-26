//imports
import { type PageProps } from "$fresh/server.ts";
import Loading from "../islands/Loading.tsx";


export default function App({ Component }: PageProps) {
  return (
    <html data-theme="dark" lang="en">
      <head>
        {/* Meta Tags  */}
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Plant More Trees... 🎄🎄🎄</title>
        <link rel="icon" href="/logo.png" type="image/png" />
        <meta name="theme-color" content="#22c55e" />
        {/* Global CSS  */}
        <link rel="stylesheet" href="/styles.css" />
        {/* Daisy UI  */}
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@4.6.0/dist/full.min.css"
          rel="stylesheet"
          type="text/css"
        />
        {/* OG Tags  */}
        <meta property="og:title" content="🎄 Gemini Grow Plant! AI" />
        <meta
          property="og:site_name"
          content="Grow Plants, Save Earth, Powered By AI"
        />
        <meta property="og:url" content="https://gemini-grow-plants.deno.dev" />
        <meta
          property="og:description"
          content="Welcome to your personalizedplant recommendations, powered byAI! By growing these plants, you're not only enhancing your surroundings but alsocontributingto the well-being of our planet. Remember, plants are ourbest friends. Theserecommendationsare tailored to your location and local weather, so you can nurture these green companions with confidence. Let'sgrow together and make apositive impact on Earth! Scoll Down :)"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/logo.png" />
      </head>
      <body class="text-white">
        {/* Loader  */}
        <Loading />
        {/* Navbar  */}
        <header>
          <div class="navbar bg-base-100">
            <div class="flex-1">
              <a href="/" class="text-4xl md:text-7xl h-fit w-full">
                🎄
              </a>
            </div>
            <div class="flex">
              <ul class="pr-2 md:pr-4">
                <li>
                  <a
                    class="btn text-white"
                    href="//github.com/ArnavK-09/gemini-grow-plants"
                    target="_blank"
                    aria-label="github"
                  >
                    Source Code (Github)
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </header>
        {/* Navbar End  */}

        {/* Website Content  */}
        <main>
          <Component />
        </main>
        {/* Website Content End  */}

        {/* Footer  */}
        <footer class="footer items-center p-4 bg-neutral text-neutral-content">
          <aside class="items-center grid-flow-col">
            <p>
              Copyright ©{new Date().getFullYear()} <strong class="text-white">ArnavK-09</strong>
              - All right reserved
            </p>
          </aside>
        </footer>{" "}
        {/* Footer End  */}
      </body>
    </html>
  );
}
