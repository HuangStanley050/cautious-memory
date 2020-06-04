import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <div className="logo">
          <svg
            className="pizza-svg"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <path
              fill="none"
              d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
            />
            <path fill="none" d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z" />
          </svg>
        </div>
        <motion.div
          initial={{ y: -250 }}
          animate={{ y: -10 }}
          transition={{ type: "spring", delay: 0.2, stiffness: 150 }}
          className="title"
        >
          <Link href="/">
            <h1 style={{ cursor: "pointer" }}>Pizza Joint</h1>
          </Link>
        </motion.div>
      </header>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
