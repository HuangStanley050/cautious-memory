import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="home container">
        <h2>Welcome to Pizza Joint</h2>
        <Link href="/base">
          <button>Create Your Pizza</button>
        </Link>
      </div>
    </Layout>
  );
};

export default Home;
