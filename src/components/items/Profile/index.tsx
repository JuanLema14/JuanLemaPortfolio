import React from "react";
import Image from "next/image";

const Profile = () => {
  return (
    <div className="relative w-[150px] h-[242px] flex flex-col items-center">
      {/* Avatar */}
      <div className="relative w-[150px] h-[150px] rounded-full overflow-hidden">
        <Image
          src="/img/avatar_img.png"
          alt="Juan Andres Lema"
          width={150}
          height={150}
          className="object-cover w-full h-full"
        />
        {/* Badge verde */}
      </div>
        <span className="absolute w-[16px] h-[16px] rounded-full bg-disponible top-[110px] right-2 z-10" />

      {/* Nombre */}
      <h4 className="mt-[24px] text-[18px] font-medium leading-[124%] text-[var(--color-darktext)]">
        Juan Andres Lema
      </h4>

      {/* Rol */}
      <p className="mt-[5px] text-[15px] leading-[24px] text-[var(--color-graytext)]">
        Fullstack Developer
      </p>
    </div>
  );
};

export default Profile;
