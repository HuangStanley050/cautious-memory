import "./style.css";
import React from "react";

import { Provider } from "react-redux";
import App from "next/app";

import { wrapper } from "../store/setupStore";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps, store }) {
  return <Component {...pageProps} />;
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};
//const makeStore = () => store;
export default wrapper.withRedux(MyApp);
