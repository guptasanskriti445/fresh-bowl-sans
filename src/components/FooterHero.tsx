import React from "react"
import hero1 from "../assets/rabbit.png"
const FooterHero = () => {
  return (
    // <div className="hero flex justify-left items-center">
    //   {/* Image with responsive sizes */}
    //   <img
    //     src={hero1}
    //     alt="Hero"
    //     className="w-full h-auto max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl"
    //   />
    // </div>
    <div className="w-full overflow-hidden">
      <div className="scroll-image inline-block whitespace-nowrap">
        {/* The image tag */}
        <img
          src={hero1}
          alt="Hero"
          className="inline-block w-64 h-auto mx-2"
        />
      
      </div>
    </div>
  )
}

export default FooterHero