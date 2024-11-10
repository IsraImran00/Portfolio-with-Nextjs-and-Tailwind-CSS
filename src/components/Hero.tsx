import React from "react";
import profileImage from "../../public/profile.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex justify-between gap-20 items-center h-[80vh]">
          <div>
            <Image className="rounded-full" width={500}  src={profileImage} alt="picture" />
          </div>

          <div data-aos="zoom-in-up" >
              <h1 className="text-[65px] font-black ">
                I am Isra Imran
              </h1>
              <p className="text-white font-bold text-4xl">Frontend Developer</p>
          </div>
        </div>
      </div>
    </>
    // </div>
  );
};

export default Hero;
