import "./style.css";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import Modal from "../components/Modal";
import App from "next/app";

import { wrapper } from "../store/setupStore";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps, store }) {
  const router = useRouter();
  //onExitComplete={handleExitComplete}
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Modal />
        <Component {...pageProps} route={router.route} key={router.route} />
      </AnimatePresence>
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};
//const makeStore = () => store;
export default wrapper.withRedux(MyApp);
