import React from "react";
import HelmetTitle from "../../Shared/HelmetTitle/HelmetTitle";
import Banner from "../Banner/Banner";
import Experts from "../Experts/Experts";
import Services from "../Services/Services";

const Home = () => {
  return (
    <>
      <HelmetTitle title="Home" />
      <Banner></Banner>
      <Services></Services>
      <Experts></Experts>
    </>
  );
};

export default Home;
