import React from "react";
import Image from "next/image";

const HomePage = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:28px_28px] animate-pulse"></div>

      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-10 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>

      <div className="absolute inset-0 bg-linear-to-b from-transparent via-black to-black"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 sm:px-6 lg:px-16 py-10 lg:py-0">
        <div className="lg:w-5/12 flex flex-col justify-center text-center lg:text-left mb-12 lg:mb-0">
          <div className="mx-auto lg:mx-0">
            <p className="text-sm sm:text-base text-gray-400 font-light tracking-[0.25em] uppercase mb-5">
              Saratoga Essentials
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
              Redefining Comfort & Purity
            </h2>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-10">
              Saratoga is a contemporary lifestyle brand combining natural
              purity with modern minimalism. From premium cream-toned apparel
              crafted for comfort, to ultra-clean hydration bottles designed for
              everyday performance — Saratoga represents a new era of pure
              living.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                Cream Luxe Clothing
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                Ultra-Pure Water Bottles
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                Minimalist Brand Identity
              </div>
              <div className="flex items-center text-gray-300">
                <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                Sustainable Materials
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-4 bg-white text-black font-semibold tracking-wider uppercase rounded-full border border-white/20 hover:bg-gray-200 hover:scale-105 transform transition-all duration-300 shadow-2xl hover:shadow-white/20">
                Explore Collection
              </button>
              <button className="px-8 py-4 bg-transparent text-white font-semibold tracking-wider uppercase rounded-full border border-white/40 hover:bg-white/10 hover:scale-105 transform transition-all duration-300">
                About Brand
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-7/12 relative flex items-center justify-center">
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h1 className="font-black uppercase leading-none tracking-tight text-[22vw] lg:text-[19vw] xl:text-[17vw] text-white/10 select-none">
              SARATOGA
            </h1>
          </div>

          <div className="relative w-full max-w-2xl">
            <div className="absolute -inset-6 sm:-inset-8 bg-white/10 rounded-3xl blur-3xl"></div>

            <div className="relative bg-black/50 backdrop-blur-md border border-white/10 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl">
              <div className="relative">
                <div className="absolute -top-3 -left-3 w-6 h-6 bg-white/30 rounded-full blur-sm"></div>
                <div className="absolute -bottom-3 -right-3 w-4 h-4 bg-white/20 rounded-full blur-sm"></div>

                <Image
                  src="/assets/p_2.png"
                  alt="Saratoga Lifestyle Bottle & Apparel"
                  width={900}
                  height={800}
                  className="w-full h-auto drop-shadow-2xl transform hover:scale-[1.03] transition-transform duration-500"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 lg:hidden">
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-500 uppercase tracking-widest mb-2">
            Scroll to Explore
          </span>
          <div className="w-px h-12 bg-linear-to-b from-white to-transparent"></div>
        </div>
      </div>

      <div className="absolute top-8 left-8 w-4 h-4 border-l-2 border-t-2 border-white/20"></div>
      <div className="absolute top-8 right-8 w-4 h-4 border-r-2 border-t-2 border-white/20"></div>
      <div className="absolute bottom-8 left-8 w-4 h-4 border-l-2 border-b-2 border-white/20"></div>
      <div className="absolute bottom-8 right-8 w-4 h-4 border-r-2 border-b-2 border-white/20"></div>
    </section>
  );
};

export default HomePage;
