import React from "react";
import ServicesHeaderTriangle from "../assets/images/triangles/ServicesHeaderTriangle.png";
import ServiceHeaderRightTriangle from "../assets/images/triangles/ServiceHeaderRightTriangle.png";
interface HeroSectionProps2 {
  title: string;
  highlightText: string;
  imagePath: string;
  imageAlt?: string;
  description: string;
}

const BusinessSetupHero: React.FC<HeroSectionProps2> = ({
  title,
  highlightText,
  imagePath,
  imageAlt = "Business Services Illustration",
  description,
}) => {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full overflow-hidden bg-white  shadow-lg p-4 md:p-8 relative">
      {/* Left content section */}
      <img loading="lazy" 
        src={ServicesHeaderTriangle}
        className="hidden md:block md:absolute md:top-1/2 -translate-y-1/2 md:left-0 md:h-72"
      />
      <img loading="lazy" 
        src={ServiceHeaderRightTriangle}
        className="hidden z-20 md:block md:absolute md:bottom-0 md:right-0 md:h-72 translate-y-8 "
      />
      <div className="md:w-1/2 md:ml-16 w-full p-6 flex flex-col justify-center bg-white bg-opacity-95">
        <h1 className="text-4xl md:text-6xl font-bold mb-5">
          <span className="text-black">{title}</span>{" "}
          <span className="text-blue-400">{highlightText}</span>
        </h1>
        <p className="text-gray-800 text-lg md:text-lg leading-relaxed">
          {description}
        </p>
      </div>

      {/* Right image section with diagonal cut and shadow */}
      <div className="md:w-1/2 w-full relative">
        <div
          className="absolute inset-0 bg-blue-100 sm:rounded-4xl shadow-xl clip-polygon
        style={{
      backgroundColor: 'rgba(173, 216, 230, 0.3)',
      zIndex: 1,
    }} "
        ></div>
        <img loading="lazy" 
          src={imagePath}
          alt={imageAlt}
          className="w-full h-full object-cover clip-polygon"
        />
      </div>

      <style>
  {`
    @media (min-width: 768px) {
      .clip-polygon {
        clip-path: polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%);
      }
    }
    
    /* For smaller devices, no clip-path */
    @media (max-width: 767px) {
      .clip-polygon {
        clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
        border-radius: 2em;
      }
    }
  `}
</style>
    </div>
  );
};

export default BusinessSetupHero;
