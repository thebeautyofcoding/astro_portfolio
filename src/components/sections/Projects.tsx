import React from "react"
import MotionWrap from "../wrappers/MotionWrap"
import SectionWrap from "./../wrappers/SectionWrap"

import { useState, useEffect } from "react"
import { projects } from "../../data/projects"
import { motion } from "framer-motion"
type ProjectType = "Frontend" | "Backend" | "Scripting" | "All"
const tags: ProjectType[] = ["Frontend", "Backend", "Scripting", "All"]

function Projects() {
  useEffect(() => {
    setFilteredProjects(projects)
  }, [])

  const [activeTag, setActiveTag] = useState<ProjectType>("All")
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  const handleClickedTag = (tag: ProjectType) => {
    setActiveTag(tag)
    setAnimateCard({ y: 100, opacity: 0 })
    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 })
      if (tag === "All") {
        setFilteredProjects(projects)
      } else {
        const filtered = projects.filter((project) => project.tag === tag)
        setFilteredProjects(filtered)
      }
    }, 500)
  }
  return (
    <section id="projects" className="">
      <h2 className="text-3xl font-semibold text-center mb-8">
        Good Projects Mean A Lot Of Experience
      </h2>
      <ul className="flex justify-center mb-8 flex-wrap">
        {tags.map((tag, index) => (
          <li
            onClick={() => {
              handleClickedTag(tag)
            }}
            className={[
              "mx-4  px-4 py-2 font-semibold rounded cursor-pointer shadow duration-300 hover:scale-105 hover:shadow-lg m-2",
              activeTag === tag ? "bg-blue-500 text-white" : "bg-gray-100",
            ].join(" ")}
            key={"tag-" + index}>
            {tag}
          </li>
        ))}
      </ul>

      <ul className="flex flex-wrap justify-center lg:max-w-[90%] max-w-[75%] mx-auto">
        {filteredProjects.map((project, index) => (
          <motion.li
            initial={{ y: 100, opacity: 0 }}
            animate={animateCard}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            key={"project-" + index}
            className="sm:max-w-[300px] w-[90%]  shadow-lg rounded-lg m-4 overflow-clip bg-gray-200">
            <div className="relative  sm:w-[300px] sm:h-[300px] w-max-[90%] h-[350px]">
              <img
                src={project.image.src}
                alt={project.title}
                className="sm:w-[300px] sm:h-[300px] h-[350px]  w-full object-cover object-center absolute"
              />
              <div className="absolute bottom-0 left-[50%] translate-y-[50%] z-20 translate-x-[-50%] text-gray-500 bg-white rounded p-1">
                {project.tag}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.5, staggerChildren: 0.5 }}>
                <div className="w-full h-full hover:bg-gray-800 z-10 absolute opacity-50  hover:transition-all duration-100">
                  <div className="relative w-full h-full">
                    <div className="left-[50%] translate-y-[-50%] translate-x-[-50%] top-[50%] text-gray-500  rounded p-1 z-40 absolute flex">
                      <motion.div
                        whileHover={{
                          scale: 1.2,
                          cursor: "pointer",
                          color: "white",
                        }}
                        transition={{ duration: 0.3 }}>
                        <a
                          href={project.githubLink.link}
                          className=""
                          target="_blank">
                          <project.githubLink.icon
                            size="36"
                            className="z-40 m-1"
                          />
                        </a>
                      </motion.div>
                      <motion.div
                        whileHover={{
                          scale: 1.2,
                          cursor: "pointer",
                          color: "white",
                        }}
                        transition={{ duration: 0.5 }}>
                        <a href={project.projectLink.link} target="_blank">
                          <project.projectLink.icon
                            size="36"
                            className="z-40 m-1"
                          />
                        </a>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="p-2 ">
              <div>
                {" "}
                <h2 className="font-semibold text-xl my-2">{project.title}</h2>
              </div>
              <div> {project.description}</div>
            </div>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default MotionWrap(SectionWrap(Projects, "projects"))
