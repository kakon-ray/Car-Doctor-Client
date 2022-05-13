import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useServiceDetails from "../../Hook/useServiceDetails";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [services] = useServiceDetails(serviceId);
  const navigate = useNavigate();
  return (
    <div>
      <div className="w-50 mx-auto text-center">
        {
          <>
            <img src={services?.img} alt="" />
            <h3>{services?.name}</h3>
            <h3>{services?.price}</h3>
            <h3>{services?.description}</h3>
          </>
        }
      </div>
      <div className="text-center">
        <button
          className="btn btn-danger"
          onClick={() => {
            navigate(`/checkout/${services._id}`);
          }}
        >
          Proceed Checkout
        </button>
      </div>
    </div>
  );
};

export default ServiceDetail;
