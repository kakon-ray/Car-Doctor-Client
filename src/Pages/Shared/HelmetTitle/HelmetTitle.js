import React from "react";
import { Helmet } from "react-helmet-async";

const HelmetTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{title}-The Car Doctor Limited</title>
    </Helmet>
  );
};

export default HelmetTitle;
