import React from "react";

const Hero2 = () => {
  return (
    <>
      <div class="md:px-36 px-8 md:py-28 py-5">
        <div class="flex lg:flex-row flex-col grid-cols-2 gap-10">
          <div class="flex flex-col gap-5 justify-center p-5">
            <h1 class="text-4xl md:text-5xl font-bold">Explore</h1>
            <h1 class="text-4xl md:text-5xl font-bold">the Wonders in</h1>
            <h1 class="text-4xl md:text-6xl font-bold text-[#12293f]">World</h1>
            <p class="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button className="bg-black text-white text-3xl px-2 py-3 rounded-lg hover:bg-white hover:border hover:text-black hover:font-bold mt-4">
              Get started
            </button>
          </div>
          <div class="">
            <img
              src="https://img.freepik.com/premium-photo/woman-yellow-sweatshirt-is-sitting-red-shovel-word-world-bottom_1289061-2509.jpg?w=740"
              alt="heroimg"
              class="rounded-3xl h-[100%] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero2;
