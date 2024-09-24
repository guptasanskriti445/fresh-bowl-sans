import React from 'react';
import brimg from "../../assets/aboutbg.jpeg"; // Background image
import teamData from "../../assets/teamData.json"; // Team data

// Import images
import Designer2 from "../../assets/Designer2.jpeg";
import Designer3 from "../../assets/Designer3.jpeg";

// Create a mapping of image names to imported images
const imageMap: { [key: string]: string } = {
  "Designer1.jpeg": Designer3,
  "Designer2.jpeg": Designer2,
  "Designer3.jpeg": Designer3,
  "Designer4.jpeg": Designer2,
};

const About = () => {
  return (
    <div>
      {/* Mission Section */}
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
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">Our Mission</h1>
          <p className="text-white text-lg md:text-xl px-12">
            At The Fresh Bowl, our mission is to make healthy eating fun and tasty! We serve up delicious meals made from fresh, quality ingredients, inspiring our community to enjoy nutritious choices and embrace a happier, healthier lifestyle together—one bowl at a time!
          </p>
        </div>
      </div>

      {/* Team Section */}
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-emerald-950 mb-4">Our Team</h1>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-lime-500 inline-flex"></div>
            </div>
          </div>

          {/* Flexbox for centering team cards */}
          <div className="flex flex-wrap justify-center -m-4">
            {teamData.map((member, index) => (
              <div key={index} className="p-4 md:w-1/3 sm:w-1/2 w-full flex flex-col text-center items-center">
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 relative">
                  <div className="flex flex-col items-center pb-10">
                    {/* Adjusted image positioning */}
                    <img 
                      className="w-24 h-24 mb-3 rounded-full shadow-lg -mt-12 z-10" 
                      src={imageMap[member.image] || Designer2} // Fallback image
                      alt={`Photo of ${member.name}, ${member.role}`} // Enhanced alt text
                    />
                    <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{member.name}</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{member.role}</span>
                    <div className="flex mt-4 md:mt-6">
                      <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add friend</a>
                      <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
