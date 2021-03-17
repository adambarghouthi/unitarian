import React from "react";
import { useRouter } from "next/router";

import "../styles/style.scss";

import AOS from "aos";

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();

  React.useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  React.useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [pathname]); // triggered on route change

  return <Component {...pageProps} />;
}

export default MyApp;
