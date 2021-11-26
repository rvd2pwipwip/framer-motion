import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const scrim = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

const Modal = ({ showModal, setShowModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="scrim"
          variants={scrim}
          initial="start"
          animate="end"
        ></motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
