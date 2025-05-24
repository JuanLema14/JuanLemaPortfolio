"use client";

const Hero = () => {
  return (
    <section className="w-[970px] h-[467.09px] flex gap-[42px] bg-[var(--color-fondo)]">
      {/* Texto Izquierda */}
      <div className="flex flex-col justify-center w-[500px] h-full pt-[93px] pl-[45px]">
        <h1 className="text-[48px] leading-[124%] font-bold font-inter text-[var(--color-darktext)]">
          I&apos;m Juan Lema <br />
          <span className="text-[var(--color-accent)]">Fullstack</span>{" "}
          Developer
        </h1>

        <p className="mt-6 text-[16px] leading-relaxed text-[var(--color-graytext)]">
          Web developer passionate about building clean and efficient apps. I
          bring ideas to life with code, both frontend and backend.
        </p>

        <button className="mt-10 px-6 py-3 bg-[var(--color-accent)] text-[var(--color-darktext)] rounded-md font-semibold w-[154px] h-[51px] hover:scale-105 transition-transform duration-300">
          HIRE ME
        </button>
      </div>

      {/* Imagen Derecha */}
      <div className="w-[325.72px] h-[459.09px] mt-[8px]">
        <img
          src="img/hero_img.png"
          alt="Juan Lema"
          className="w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
