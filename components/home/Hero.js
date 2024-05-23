import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-gray-800 font-black leading-7 md:leading-10">
          CONNECTING RISHIHOOD <br/>
            <span className="text-indigo-700">{" "}AND THE COMMUNITY{" "}</span>
          </h1>
          <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-400 font-normal text-center text-sm sm:text-lg">
          At Rishihood University, community engagement is at the heart of our mission. We are dedicated to fostering meaningful connections between our students, faculty, and the broader community. Through a range of initiatives, including collaborative projects, volunteer opportunities, and local partnerships, we aim to create a vibrant ecosystem where knowledge and resources flow freely. Our community engagement website serves as a hub for these activities, highlighting our ongoing efforts and providing a platform for members to get involved, share ideas, and work together towards a sustainable and inclusive future. Join us in building a stronger, more connected community.
          </p>
        </div>
      </div>
    </div>
  );
}
