import React from "react";
import { connect } from "react-redux";
import { motion } from "framer-motion";
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
      delay: 1.2,
    },
  },
};

const Order = ({ pizza }) => {
  return (
    <Layout>
      <motion.div
        className="container order"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h2>Thank you for your order :)</h2>
        <p>You ordered a pizza pizza with:</p>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </motion.div>
    </Layout>
  );
};
const mapState = (state) => ({
  pizza: state.pizza,
});
export default connect(mapState)(Order);
