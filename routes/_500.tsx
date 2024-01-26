import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>Internal Server Error 🎋🎋🎋</title>
      </Head>
      <div class="px-4 py-8 mx-auto bg-gradient-to-br from-[#22c55ed3] to-green-700">
        <div class="w-full h-screen py-16 mx-auto flex flex-col items-center justify-center">
          <img
            class="my-6 aspect-square h-1/3"
            src="/logo.png"
            alt="404"
          />
          <h1 class="text-4xl font-bold">500</h1>
          <p class="my-4">
            Kindly seek for yhelp from developer...
          </p>
          <a href="//github.com/ArnavK-09" class="btn btn-error">
            Contact Developer
          </a>
        </div>
      </div>
    </>
  );
}
