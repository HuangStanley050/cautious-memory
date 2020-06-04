import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { AnimatePresence, motion } from "framer-motion";

const Home = () => {
  return (
    <Layout>
      <motion.div
        className="home container"
        animate={{ marginTop: 200, rotateZ: 180 }}
      >
        <motion.h2 animate={{ fontSize: 50, color: "yellow", x: 100, y: -100 }}>
          Welcome to Pizza Joint
        </motion.h2>
        <Link href="/base">
          <motion.button animate={{ scale: 1.5 }}>
            Create Your Pizza
          </motion.button>
        </Link>
      </motion.div>
    </Layout>
  );
};

export default Home;
