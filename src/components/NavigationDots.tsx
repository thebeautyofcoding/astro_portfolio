import React from "react"

function NavigationDots({ id }: { id: string }) {
  return (
    <ul className=" flex flex-col justify-center">
      {["about", "skills", "projects", "contact"].map((section, index) => (
        <li
          key={"dot-" + index}
          className={[
            "w-4 h-4 bg-gray-500 rounded-full my-2",
            id === section ? "bg-blue-500" : "",
          ].join(" ")}></li>
      ))}
    </ul>
  )
}

export default NavigationDots
