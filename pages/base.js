import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const Base = () => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  return (
    <Layout>
      <div className="base container">
        <h3>Step 1: Choose Your Base</h3>
        <ul>
          {/*bases.map((base) => {
            let spanClass = pizza.base === base ? "active" : "";
            return (
              <li key={base} onClick={() => addBase(base)}>
                <span className={spanClass}>{base}</span>
              </li>
            );
          })*/}
        </ul>

        {/*pizza.base && (
          <div className="next">
            <Link href="/toppings">
              <button>Next</button>
            </Link>
          </div>
        )*/}
      </div>
    </Layout>
  );
};

export default Base;
