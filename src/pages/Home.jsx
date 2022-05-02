import React from "react";
import Helmet from "../components/Helmet";
import MainSlider from "../components/MainSlider";

const Home = () => {
  return (
    <Helmet title="Home page">
      {/*main slider*/}
      <MainSlider />

      {/*end main slider*/}
    </Helmet>
  );
};

export { Home };
