import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import NavFoot from "../components/navfoot";
import { useState, useEffect } from "react";
import LinearDeterminate from "../components/loading";
import dynamic from "next/dynamic";
const DynamicComponent = dynamic(() => import("./index"));

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  //💡 I'm still trying to figure out how to have everythg load smoother, it works! but I know it could be faster!

  /*
  if (DynamicComponent) {
    useEffect(() => {
      setTimeout(() => setLoading(false), 1000);
    }, []);
  }
  */

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <>
      <NavFoot>
        <Component {...pageProps} />
      </NavFoot>
    </>
  );
}

export default MyApp;
