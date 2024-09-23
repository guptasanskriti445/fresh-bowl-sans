import React from 'react'
import hero1 from "../assets/rabbit.png"
const About = () => {
  return (
    <div className="w-full overflow-hidden">
    <div className="inline-block whitespace-nowrap">
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

export default About