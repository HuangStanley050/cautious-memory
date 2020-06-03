import React from "react";
import Link from "next/link";
import { connect } from "react-redux";
import { makeBase } from "../store/actions/pizzaActions";
import Layout from "../components/Layout";

const Base = ({ pizza, addBase }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <Layout>
      <div className="base container">
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
          <div className="next">
            <Link href="/toppings">
              <button>Next</button>
            </Link>
          </div>
        )}
      </div>
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
