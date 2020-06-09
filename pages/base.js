import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { makeBase } from "../store/actions/pizzaActions";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

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

const nextVariants = {
  hidden: {
    x: "-100vw",
  },
  visible: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 150,
    },
  },
};
const buttonVariants = {
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.3,
      yoyo: Infinity,
    },
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
  },
};
const Base = ({ pizza, addBase }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <Layout>
      <motion.div
        className="base container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <h3>Step 1: Choose Your Base</h3>
        <ul>
          {bases.map((base) => {
            let spanClass = pizza.base === base ? "active" : "";
            return (
              <motion.li
                transition={{ type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.3, color: "#f8e112", originX: 0 }}
                key={base}
                onClick={() => addBase(base)}
              >
                <span className={spanClass}>{base}</span>
              </motion.li>
            );
          })}
        </ul>

        {pizza.base && (
          <motion.div
            className="next"
            variants={nextVariants}
            initial="hidden"
            animate="visible"
          >
            <Link href="/toppings">
              <motion.button variants={buttonVariants} whileHover="hover">
                Next
              </motion.button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </Layout>
  );
};
const mapState = (state) => ({
  pizza: state.pizza,
});
const mapDispatch = (dispatch) => ({
  addBase: (base) => dispatch(makeBase(base)),
});
export default connect(mapState, mapDispatch)(Base);
