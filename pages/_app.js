import "./style.css";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";

import { Provider } from "react-redux";
import App from "next/app";
import { useRouter } from "next/router";

import { wrapper } from "../store/setupStore";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps, store }) {
  const router = useRouter();
  return <Component {...pageProps} key={router.route} />;
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};
//const makeStore = () => store;
export default wrapper.withRedux(MyApp);
