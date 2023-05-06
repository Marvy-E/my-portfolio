import React from 'react';
import { HiArrowNarrowRight } from "react-icons/hi";
import marvy from'../assets/marvy.jpg';
import { Link } from "react-scroll";

function Home() {
    return (
        <div
            name="home"
    className="h-screen w-full bg-white"
  >
    <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-0 md:flex-row">
      <div className="flex flex-col justify-center h-full w-7/12 mr-2">
        <h2 className="text-4xl sm:text-7xl font-bold text-blue-900">
          I'm a Frontend Developer
        </h2>
        <p className="text-gray-500 py-4 max-w-md">
            I create user interfaces and web applications. I have the technical knowledge and create vision to develop web-based solutions that look great and function smoothly.
            Currently, I love to work on web application using technologies like
            React, Vue, and Tailwind.
        </p>
        <div>
          <Link
            to="about"
            smooth
            duration={500}
            className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
          >
            About Me
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight size={25} className="ml-3" />
            </span>
          </Link>
        </div>
      </div>
      <div className="flex -space-x-1 mx-0 overflow-hidden">
        <img
          src={marvy}  
          alt="my profile"
          className="h-60 w-52 rounded-full"
        />
      </div>
    </div>
        </div>
    );
}

export default Home;