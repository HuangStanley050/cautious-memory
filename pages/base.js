import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { makeBase } from "../store/actions/pizzaActions";
import Layout from "../components/Layout";
import { motion } from "framer-motion";

const Base = ({ pizza, addBase }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <Layout>
      <motion.div
        className="base container"
        animate={{ x: 0 }}
        transition={{ type: "spring", delay: 0.5 }}
        initial={{ x: "100vw" }}
      >
        <h3>Step 1: Choose Your Base</h3>
        <ul>
          {bases.map((base) => {
            let spanClass = pizza.base === base ? "active" : "";
            return (
              <li key={base} onClick={() => addBase(base)}>
                <span className={spanClass}>{base}</span>
              </li>
            );
          })}
        </ul>

        {pizza.base && (
          <motion.div
            className="next"
            animate={{ x: 0 }}
            initial={{ x: "-100vw" }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <Link href="/toppings">
              <button>Next</button>
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
