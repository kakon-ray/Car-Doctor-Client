import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const useServiceDetails = (serviceId) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch(`https://gentle-wave-76810.herokuapp.com/service/${serviceId}`)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return [services];
};

export default useServiceDetails;
