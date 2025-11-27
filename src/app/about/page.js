import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  const heritageItems = [
    {
      title: "THE ART OF WATER",
      image: "/assets/ChatGPT Image May 29, 2025, 12_50_53 AM.png",
      link: "#",
      position: "" 
    },
    {
      title: "THE ART OF CLOTHING",
      image: "/assets/ChatGPT Image May 29, 2025, 12_50_34 AM.png",
      link: "#",
      position: "lg:mt-16" 
    },
    {
      title: "THE ART OF COLLECTION",
      image: "/assets/ChatGPT Image Nov 24, 2025, 01_28_19 PM.png",
      link: "#",
      position: ""
    },
  ];

  return (
    <section className="min-h-screen bg-gray-300 px-4 sm:px-6 lg:px-16 py-16">
      <header className="max-w-4xl mx-auto text-center mb-20">
        <h1 className="text-5xl sm:text-7xl font-black mb-8 text-black tracking-tight">
          OUR HERITAGE
        </h1>
        <div className="w-24 h-1 bg-black mx-auto mb-8"></div>
        <p className="text-lg sm:text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed font-light">
          Born in the foothills of the Adirondacks, Saratoga® Spring Water has
          pursued the art of water for over 150 years. We believe in curated,
          meaningful choices regarding our water and how we show up on tables
          and in the world.
        </p>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8 items-start">
        {heritageItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col items-center text-center group ${item.position}`}
          >
            {/* Image Container with Modern Border */}
            <div className="w-full overflow-hidden rounded-none shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 border border-gray-100">
              <Image
                src={item.image}
                alt={item.title}
                width={500}
                height={320}
                className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            <Link
              href={item.link}
              className="mt-6 text-xl font-bold text-black tracking-wide relative inline-block group-hover:text-gray-700 transition-all duration-300"
            >
              {item.title}
              <span className="absolute left-0 -bottom-2 w-0 h-0.5 bg-black group-hover:w-full transition-all duration-500"></span>
            </Link>
            
            <p className="mt-3 text-sm text-gray-600 font-light max-w-xs">
              Discover the craftsmanship and tradition behind our legacy
            </p>
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-20">
        <div className="border-t border-gray-200"></div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 text-center">
        <p className="text-sm uppercase tracking-widest text-gray-500 font-medium">
          ESTABLISHED 1870 • SARATOGA SPRINGS
        </p>
      </div>
    </section>
  );
};

export default AboutPage;