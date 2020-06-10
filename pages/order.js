import React, { useState } from "react";
import { connect } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import Layout from "../components/Layout";

const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      mass: 0.4,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 0.7,
    },
  },
};
const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const Order = ({ pizza }) => {
  const [showTitle, setShowTitle] = useState(true);
  setTimeout(() => {
    setShowTitle(false);
  }, 4000);
  return (
    <Layout>
      <motion.div
        className="container order"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {showTitle && (
            <motion.h2 exit={{ y: -1000 }}>
              Thank you for your order :)
            </motion.h2>
          )}
        </AnimatePresence>

        <motion.p variants={childVariants}>
          You ordered a pizza pizza with:
        </motion.p>
        <motion.div variants={childVariants}>
          {pizza.toppings.map((topping) => (
            <div key={topping}>{topping}</div>
          ))}
        </motion.div>
      </motion.div>
    </Layout>
  );
};
const mapState = (state) => ({
  pizza: state.pizza,
});
export default connect(mapState)(Order);
