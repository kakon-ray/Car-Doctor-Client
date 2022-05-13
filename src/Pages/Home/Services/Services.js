import React, { useEffect, useState } from "react";
import HelmetTitle from "../../Shared/HelmetTitle/HelmetTitle";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://gentle-wave-76810.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services" className="container">
      <HelmetTitle title="Services" />
      <div className="row">
        <h1 className="text-dark  text-center my-5"> Our Services</h1>
        <div className="services-container">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
