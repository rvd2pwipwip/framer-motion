import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  start: {
    x: "40vw",
    opacity: 0,
  },
  end: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeIn" },
  },
};

const childVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
  },
};

const Order = ({ pizza }) => {

  return (
    <motion.div
      className="container order"
      variants={containerVariants}
      initial="start"
      animate="end"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariants}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Order;
