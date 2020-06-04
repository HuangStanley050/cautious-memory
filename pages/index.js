import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  return (
    <Layout>
      <motion.div
        className="home container"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <h2>Welcome to Pizza Joint</h2>
        <Link href="/base">
          <motion.button animate={{}}>Create Your Pizza</motion.button>
        </Link>
      </motion.div>
    </Layout>
  );
};

export default Home;
