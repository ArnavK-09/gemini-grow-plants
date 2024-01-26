import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>Page not found! 🎋🎋🎋</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-gradient-to-br from-[#22c55ed3] to-green-900">
        <div class="w-full h-screen py-16 mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6 aspect-square h-1/3"
            src="/logo.png"
            alt="404"
          />
          <h1 class="text-4xl font-bold">404</h1>
          <p class="my-4">
            The page you were looking for doesn't exist.
          </p>
          <a href="/" class="btn btn-error font-extrabold">Go back home</a>
        </div>
      </div>
    </>
  );
}
