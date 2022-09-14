import React from "react"
import { AiFillGithub } from "react-icons/ai"
import { SiUpwork } from "react-icons/si"
import { AiFillYoutube } from "react-icons/ai"

function SocialMedia() {
  return (
    <div className="shadow p-2 rounded flex flex-col">
      <div className="text-gray-500 hover:text-blue-500 transition duration-300 cursor-pointer">
        <a href="https://github.com/thebeautyofcoding">
          {" "}
          <AiFillGithub size={38} />
        </a>
      </div>
      <div className="text-gray-500 hover:text-blue-500 transition duration-300 cursor-pointer">
        <a href="https://www.upwork.com/freelancers/~01e359856bc8297a0f">
          <SiUpwork size={38} />
        </a>
      </div>
      <div className="text-gray-500 hover:text-blue-500 transition duration-300 cursor-pointer">
        <a href="https://www.youtube.com/channel/UC7FZUBPLkay4dhoRw1W5ehw/videos">
          <AiFillYoutube size={38} />
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
