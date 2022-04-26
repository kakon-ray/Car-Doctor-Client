import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useServiceDetails from "../../../Hook/useServiceDetails";

const Checkout = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [services] = useServiceDetails(serviceId);
  //   const { services } = useServiceDetails(serviceId);
  //   console.log(services);

  return (
    <div>
      {<h2>This is Check Out Page</h2>}
      <button
        className="btn btn-primary"
        onClick={() => {
          navigate(`/checkout/${services._id}`);
        }}
      ></button>
    </div>
  );
};

export default Checkout;
