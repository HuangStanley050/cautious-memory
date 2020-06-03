import "./style.css";
import React from "react";
//import { createStore } from 'redux';
import { Provider } from "react-redux";
import App from "next/app";
//import withRedux from "next-redux-wrapper";
import { wrapper } from "../store/setupStore";

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
