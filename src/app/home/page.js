import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <section
      className="relative min-h-auto"
    >
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="relative z-10 flex flex-col items-center h-full px-4 sm:px-6 pt-12 lg:pt-16">
        <h1
          className="container mx-auto
            text-center font-black uppercase leading-none
            text-[18vw] sm:text-[15vw] md:text-[13vw] lg:text-[11vw] xl:text-[13vw] tracking-wide
            bg-gradient-to-r from-gray-900 via-gray-400 to-gray-900 bg-clip-text text-transparent
          "
        >
          Saratoga
        </h1>

        <div className="relative flex justify-center mt-8 md:-mt-[6vw] lg:-mt-[4vw]">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-to-r from-gray-800/40 to-gray-300/20 rounded-full blur-2xl"></div>
            <Image
              src="/assets/hero_image_2.png"
              alt="Hero Image"
              width={800}
              height={700}
              className="
                relative
                -top-12
                w-[85vw] xs:w-[75vw] sm:w-[60vw] md:w-[45vw] lg:w-[35vw] xl:w-[38vw]
                h-auto
              "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;