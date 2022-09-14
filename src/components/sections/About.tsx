import React from "react"
import { about } from "../../data/about"
import SectionWrap from "./../wrappers/SectionWrap"
import MotionWrap from "./../wrappers/MotionWrap"
function About() {
  return (
    <section
      id="about"
      className=" lg:max-w-[80%] max-w-[75%] flex-col min-h-screen flex justify-center">
      <h2 className="text-3xl font-semibold text-center ">About Me</h2>
      <div className="shadow-lg rounded flex p-4 lg:flex-row flex-col">
        <div className="shadow rounded p-4 flex  basis-1/3 sm:mr-4 mb-4 lg:mb-0 justify-evenly ">
          <div className="flex justify-center items-center">
            {" "}
            <img
              src={about.profileImage}
              className="w-28 h-28 object-cover rounded-full shadow"
            />
          </div>
          <ul className="ml-4 flex flex-col  justify-center p-1 rounded">
            {about.hobbies.map((hobby, index) => (
              <li key={"hobby-" + index}>- {hobby}</li>
            ))}
          </ul>
        </div>
        <div className="shadow flex basis-2/3 py-2 px-4 items-center ">
          Hello, I am Heiner from Germany and I am passionate about everything
          FullStack. I love to work with Laravel, Flask, Django, Express and
          NestJS for the backend, and ReactJS, NextJS and Astro for the frontend
        </div>
      </div>
    </section>
  )
}

export default MotionWrap(SectionWrap(About, "about"))
