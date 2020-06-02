import React from "react";
import Layout from "../components/Layout";

const Order = () => {
  return (
    <Layout>
      <div className="container order">
        <h2>Thank you for your order :)</h2>
        <p>You ordered a pizza pizza with:</p>
        {/*{pizza.toppings.map((topping) => (
        <div key={topping}>{topping}</div>
      ))}*/}
      </div>
    </Layout>
  );
};

export default Order;
