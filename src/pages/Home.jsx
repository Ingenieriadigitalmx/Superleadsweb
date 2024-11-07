import React from "react";
// import { FormattedMessage } from "react-intl";
import Prices from "../components/Prices";
import Headersection from "../components/Headersection";
import Howto from "../components/Howto";
import FastPage from "../components/FastPage";

function Home() {
  return (
    <div className="allpage">
      {/* <Headersection />
      <Howto />
      <Prices /> */
      }
      <FastPage/>
    </div>
  );
}

export default Home;
