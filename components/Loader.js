import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.5,
        ease: "easeOut",
      },
    },
  },
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.2,
        ease: "easeOut",
      },
    },
  },
};
const Loader = () => {
  const [animation, setAnimation] = useCycle("animationOne", "animationTwo");
  return (
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={animation}
      ></motion.div>
      <div
        onClick={() => {
          setAnimation();
        }}
      >
        Cycle Loader
      </div>
    </>
  );
};

export default Loader;
