import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import Loader from "../components/Loader";
import { AnimatePresence, motion } from "framer-motion";

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

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1.5, duration: 0.8 },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};
const Home = () => {
  return (
    <Layout>
      <motion.div
        className="home container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <h2>Welcome to Pizza Joint</h2>

        <Link href="/base">
          <motion.button variants={buttonVariants} whileHover="hover">
            Create Your Pizza
          </motion.button>
        </Link>
      </motion.div>
      <Loader />
    </Layout>
  );
};

export default Home;
