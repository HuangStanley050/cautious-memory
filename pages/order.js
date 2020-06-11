import React, { useEffect } from "react";
import { connect } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { showModal } from "../store/actions/pizzaActions";
import Layout from "../components/Layout";
import Modal from "../components/Modal";

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
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
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
const Order = ({ pizza, modal, dispatch }) => {
  useEffect(() => {
    setTimeout(() => {
      console.log("show modal");
      dispatch(showModal());
    }, 4000);
  }, [modal]);
  return (
    <Layout>
      <Modal />
      <motion.div
        className="container order"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2>Thank you for your order :)</h2>

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
  modal: state.pizza.showModal,
});
// const mapDispatch = (dispatch) => ({
//   showM: () => dispatch(showModal()),
// });
export default connect(mapState)(Order);
