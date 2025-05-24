"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
  {
    title: "Pokedle",
    description:
      "An interactive Pokémon guessing game built with HTML, CSS, JS, and the PokeAPI.",
    image: "/img/pokedle.png",
    link: "https://pokedle-sigma.vercel.app/",
  },
  {
    title: "Optimization Methods",
    description:
      "Calculator for optimization methods with charts, tables, and result export.",
    image: "/img/metodos_optimizacion.png",
    link: "https://metodos-de-optimizacion.vercel.app/",
  },
  {
    title: "Inno Sistemas",
    description:
      "Frontend and Backend project for the Fabrica Escuela, with a modern and functional design.",
    image: "/img/inno_sistemas.png",
    link: "https://inno-sistemas.vercel.app/",
  },
];

export default function Portfolio() {
  return (
    <section className="max-w-[970px] mx-auto px-4 py-10 text-center">
      <h2 className="text-3xl font-bold mb-2 text-[var(--color-darktext)]">
        Portfolio
      </h2>
      <p className="text-gray-400 max-w-xl mx-auto mb-10">
        Explore some of the projects I have developed, where I combine creativity with functional solutions. From interactive games to advanced analysis tools.
      </p>

      {/* Custom carousel controls */}
      <div className="relative">
        <button className="absolute left-[-40px] top-1/2 -translate-y-1/2 z-10 swiper-button-prev text-white hover:text-accent">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="absolute right-[-40px] top-1/2 -translate-y-1/2 z-10 swiper-button-next text-white hover:text-accent">
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Swiper carousel */}
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1.2}
          spaceBetween={24}
          loop
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-10"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[var(--color-fondo)] rounded-md shadow-md overflow-hidden w-full h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-left">
                  <h3 className="text-lg font-semibold text-[var(--color-darktext)]">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm my-2">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center text-[var(--color-accent)] font-semibold hover:underline transition-all duration-300"
                  >
                    Learn More{" "}
                    <span className="ml-1 transition-transform group-hover:translate-x-1">
                      &rsaquo;
                    </span>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
