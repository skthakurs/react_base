import React from "react";
import App from "next/app";
import NProgress from "nprogress";
import Router from "next/router";

Router.events.on("routeChangeStart", url => {
  console.log(`Loading: ${url}`);
  NProgress.start();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

class MyApp extends App {
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);
    console.log("from getinitialProps in _app.js");
    return { ...appProps };
  }

  render() {
    console.log("from render in _app.js");

    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}

export default MyApp;
