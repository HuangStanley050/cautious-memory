import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { connect } from "react-redux";

const Modal = ({ showModal }) => {
  return (
    <AnimatePresence exitBeforeEnter>
      {showModal && <motion.div className="backdrop" animate></motion.div>}
    </AnimatePresence>
  );
};
const mapState = (state) => ({
  showModal: state.pizza.showModal,
});
export default connect(mapState)(Modal);
