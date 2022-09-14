import React from "react"
import SocialMedia from "../SocialMedia"
import NavigationDots from "./../NavigationDots"

const SectionWrap = (Component: React.FC, id: string) =>
  function HOC() {
    return (
      <div className="relative flex justify-center my-20 w-screen">
        <div className="absolute left-[2%] bottom-[50%] translate-y-[50%] sm:block hidden">
          <SocialMedia />
        </div>

        <Component />

        <div className="absolute left-[96%] bottom-[50%] translate-y-[50%] sm:block hidden">
          <NavigationDots id={id} />
        </div>
      </div>
    )
  }

export default SectionWrap
