import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  bounce1: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        yoyo: Infinity,
        duration: 0.5,
      },
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
  bounce2: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 0.25,
        ease: "easeOut",
      },
    }
  },
};

const Loader = () => {
  const [bounce, cycleBounce] = useCycle("bounce1", "bounce2")
  return ( 
    <>
      <motion.div
        className="loader"
        variants={loaderVariants}
        animate={bounce}
      ></motion.div>
      <div onClick={() => cycleBounce()}>Cycle loader</div>
    </>
  );
};

export default Loader;
