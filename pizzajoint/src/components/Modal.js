import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const scrim = {
  start: { opacity: 0 },
  end: { opacity: 1 },
};

const modal = {
  start: {
    y: "-100vh",
    opacity: 0,
  },
  end: {
    y: "25vh",
    opacity: 1,
    transition: { delay: 0.5 },
  },
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
          exit="start"
        >
          <motion.div className="modal" variants={modal}>
            <p>Want to make another pizza?</p>
            <Link to="/">
              <button>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
