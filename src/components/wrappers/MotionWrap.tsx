import { motion } from "framer-motion"
const MotionWrap = (Component: React.FC) =>
  function HOC() {
    return (
      <motion.div
        className="flex justify-center"
        whileInView={{ y: [100, 50, 0], opacity: [0, 0, 1] }}
        transition={{ duration: 0.5 }}>
        <Component />
      </motion.div>
    )
  }

export default MotionWrap
