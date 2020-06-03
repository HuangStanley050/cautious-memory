import React from "react";
import { connect } from "react-redux";
import Layout from "../components/Layout";

const Order = ({ pizza }) => {
  return (
    <Layout>
      <div className="container order">
        <h2>Thank you for your order :)</h2>
        <p>You ordered a pizza pizza with:</p>
        {pizza.toppings.map((topping) => (
          <div key={topping}>{topping}</div>
        ))}
      </div>
    </Layout>
  );
};
const mapState = (state) => ({
  pizza: state.pizza,
});
export default connect(mapState)(Order);
