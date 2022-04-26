import React, { useEffect, useState } from "react";
import Service from "../Home/Service/Service";
import HelmetTitle from "../Shared/HelmetTitle/HelmetTitle";

const ManageService = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://gentle-wave-76810.herokuapp.com/service")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const deleteService = (id) => {
    const proceed = window.confirm("Are you deleted item");

    if (proceed) {
      const url = `https://gentle-wave-76810.herokuapp.com/service/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            const newServices = services.filter((service) => service._id != id);
            setServices(newServices);
          }
        });
    }
  };

  return (
    <div>
      <div id="services" className="container">
        <HelmetTitle title="Services" />
        <div className="row">
          <h1 className="text-danger  text-center my-5"> Our Services</h1>
          <div className="services-container">
            {services.map((service) => (
              <div className="service" key={service._id}>
                <img className="w-100" src={service.img} alt="" />
                <h4 className="mt-4">{service.name}</h4>

                <p>Price: {service.price}</p>
                <p>
                  <small>{service.description}</small>
                </p>
                <button
                  onClick={() => deleteService(service._id)}
                  className="btn btn-danger"
                >
                  Delete Service
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageService;
