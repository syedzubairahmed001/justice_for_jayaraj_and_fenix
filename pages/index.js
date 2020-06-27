import React, { useEffect } from "react";
import Head from "next/head";

import { initGA, logPageView } from "../helpers/googleAnalytics";
import App from "../components/App";

export default function Home() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "development") {
      if (config.GA_ID) {
        if (!window.GA_INITIALIZED) {
          initGA();
          window.GA_INITIALIZED = true;
        }
        logPageView();
      }
    }
  }, []);
  return (
    <div className="container">
      <Head>
        <title>Justice for Jayaraj and Fenix</title>
        <meta
          name="description"
          content="Justice for Jayaraj and Fenix, Raise your voices to make a change just like we did in George Floyd case! Yes we can do it, Lets do it"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <App />
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        body {
          background-color: #333;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
