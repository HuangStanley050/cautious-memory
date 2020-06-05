import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { motion } from "framer-motion";
import { addIngredient } from "../store/actions/pizzaActions";
import Layout from "../components/Layout";

const Toppings = ({ pizza, addTopping }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <Layout>
      <div className="toppings container">
        <h3>Step 2: Choose Toppings</h3>
        <ul>
          {toppings.map((topping) => {
            let spanClass = pizza.toppings.includes(topping) ? "active" : "";
            return (
              <motion.li
                transition={{ type: "spring", stiffness: 300 }}
                whileHover={{ scale: 1.3, color: "#f8e112", originX: 0 }}
                key={topping}
                onClick={() => addTopping(topping)}
              >
                <span className={spanClass}>{topping}</span>
              </motion.li>
            );
          })}
        </ul>

        <Link href="/order">
          <motion.button
            whileHover={{
              scale: 1.1,
              textShadow: "0px 0px 8px rgb(255,255,255)",
              boxShadow: "0px 0px 8px rgb(255,255,255)",
            }}
          >
            Order
          </motion.button>
        </Link>
      </div>
    </Layout>
  );
};
const mapState = (state) => ({
  pizza: state.pizza,
});
const mapDispatch = (dispatch) => ({
  addTopping: (topping) => dispatch(addIngredient(topping)),
});
//onClick={() => addTopping(topping)}
export default connect(mapState, mapDispatch)(Toppings);
