import React from 'react'
import brimg from "../assets/background-bg2.jfif" 
const Hero2 = () => {
  return (
    <div>
         <div className="relative h-80 md:h-96 lg:h-112 xl:h-128">
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${brimg})` }}>
        </div>
        <div className="absolute inset-0 bg-emerald-950 opacity-60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          {/* <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">Explore Our Delicious Menu!</h1> */}
          <p className="text-white text-lg md:text-xl px-12">
            Come on in and check out our delicious menu! Fresh meals await, made just for you. Enjoy every bite!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Hero2