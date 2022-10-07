import { useEffect, useState } from "react"

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset)
      console.log(window.pageYOffset)
      window.addEventListener("scroll", updatePosition)

      return () => window.removeEventListener("scroll", updatePosition)
    }
    updatePosition()
  }, [])
  console.log(scrollPosition)
  return scrollPosition
}
