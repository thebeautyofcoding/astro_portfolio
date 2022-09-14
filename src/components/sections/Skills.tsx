import React from "react"
import MotionWrap from "./../wrappers/MotionWrap"
import SectionWrap from "./../wrappers/SectionWrap"
import { skills } from "../../data/skills"
function Skills() {
  return (
    <section id="skills" className="lg:max-w-[100%] max-w-[75%]">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Good Skills Mean Good Business
      </h2>
      <ul className="flex sm:flex-row sm:flex-wrap flex-col justify-center">
        {skills.map((skill, index) => (
          <li
            key={"skill-" + index}
            className="shadow rounded-lg flex flex-col sm:max-w-[250px] mx-4 overflow-clip hover:scale-110 duration-300 hover:shadow-xl  mb-8 max-w-[90%]">
            <img
              src={skill.image.src}
              alt={skill.title}
              className="object-cover sm:h-[250px] sm:w-[250px] w-full h-[350px]"
            />
            <div className="p-2">
              <div>
                <h3 className="font-semibold text-xl mb-2">{skill.title}</h3>
              </div>

              <p>{skill.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default MotionWrap(SectionWrap(Skills, "skills"))
