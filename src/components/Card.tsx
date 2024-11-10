import Image from "next/image";
import React from "react";

interface propsType {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<propsType> = ({ title, desc, img, tags }) => {
  return (
    <div
      className="border border-accent w-[300px] sm:w-[350px] rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
      data-aos="zoom-in-up"
    >
      {/* Image Section */}
      <div className="flex justify-center items-center p-4">
        {/* Container to ensure image is square */}
        <div className="relative w-[350px] h-[350px]">  {/* Ensure the wrapper is square */}
          <Image
            className="object-cover rounded-full shadow-lg"  // Make image round
            src={img}
            alt={title}
            layout="fill"  // Image will fill the entire container (but won't stretch)
            objectFit="cover"  // Ensures it maintains aspect ratio
          />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 space-y-4">
        <div className="text-2xl font-semibold text-center">{title}</div>
        <div className="text-sm text-gray-700 text-center">{desc}</div>
        <div className="flex flex-wrap gap-2 justify-center">
          {tags.map((el) => (
            <div
              className="bg-gray-200 text-sm text-gray-800 py-1 px-3 rounded-full"
              key={el}
            >
              {el}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
