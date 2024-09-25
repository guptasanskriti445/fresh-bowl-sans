import React from "react"
import brimg from "../assets/background-bg2.jfif" 
const Hero = () => {
    
  return (
    <>
    

    <div>
      {/* Welcome Section */}
      <div className="relative h-80 md:h-96 lg:h-112 xl:h-128">
        {/* Background image */}
        <div 
          className="absolute inset-0 bg-cover bg-center" 
          style={{ backgroundImage: `url(${brimg})` }}>
        </div>

        {/* Transparent black background overlay */}
        <div className="absolute inset-0 bg-emerald-950 opacity-60"></div>

        {/* Centered message */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">Welcome to The Fresh Bowl!</h1>
          <p className="text-white text-lg md:text-xl px-12">
            Discover delicious meals made from fresh, quality ingredients that fit your lifestyle.
          </p>
        </div>
      </div>

      {/* Features Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-emerald-950 mb-4">Features You'll Love</h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-lime-500 inline-flex"></div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center -m-4">
            {/* Feature Cards */}
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col">
                <h2 className="text-lg font-semibold text-emerald-950">Easy Subscription Options</h2>
                <p className="mt-2 text-gray-600">Choose from a variety of meal plans tailored to your lifestyle. We've got you covered!</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col">
                <h2 className="text-lg font-semibold text-emerald-950">Curated Menus</h2>
                <p className="mt-2 text-gray-600">Enjoy a rotating selection of delicious dishes, thoughtfully prepared by our talented chefs.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col">
                <h2 className="text-lg font-semibold text-emerald-950">Quality Ingredients</h2>
                <p className="mt-2 text-gray-600">We prioritize fresh, local ingredients in every meal, ensuring you savor every bite!</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center -m-4 mt-10">
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col">
                <h2 className="text-lg font-semibold text-emerald-950">Worry-Free Experience</h2>
                <p className="mt-2 text-gray-600">Your privacy matters! We don’t collect any personal data, allowing you to enjoy your meals worry-free.</p>
              </div>
            </div>
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-white border border-gray-200 rounded-lg shadow-md p-6 flex flex-col">
                <h2 className="text-lg font-semibold text-emerald-950">Join Our Community</h2>
                <p className="mt-2 text-gray-600">Join a community of food lovers embracing healthier lifestyles. Subscribe The Fresh Bowl today!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    </>
  )
}

export default Hero