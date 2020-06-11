import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { connect } from "react-redux";
import { hideModal } from "../store/actions/pizzaActions";

const backdropVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};
const modalVariants = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "200px",
    opacity: 1,
    transition: {
      delay: 0.5,
    },
  },
};
const Modal = ({ showModal, exitModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariants}
          animate="visible"
          initial="hidden"
          exit="hidden"
        >
          <motion.div
            className="modal"
            variants={modalVariants}
            animate="visible"
            initial="hidden"
          >
            <p>Want to make another Pizza?</p>
            <Link href="/">
              <button onClick={exitModal}>Start Again</button>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const mapState = (state) => ({
  showModal: state.pizza.showModal,
});
const mapDispatch = (dispatch) => ({
  exitModal: () => dispatch(hideModal()),
});
export default connect(mapState, mapDispatch)(Modal);
