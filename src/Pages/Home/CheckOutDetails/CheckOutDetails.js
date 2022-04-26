/* eslint-disable no-undef */
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../firebase.init";
import useServiceDetails from "../../../Hook/useServiceDetails";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const notify = () => toast("Submission Successfully");
const CheckOutDetails = () => {
  const { id } = useParams();
  const [services] = useServiceDetails(id);
  const [user, loading, error] = useAuthState(auth);

  console.log(services);

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = {
      email: user.email,
      service: services.name,
      servicesId: services._id,
      address: e.target.address.value,
      phone: e.target.phone.value,
    };

    // fetch("https://gentle-wave-76810.herokuapp.com/order", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(order),
    // }).then((res) => {
    //   console.log(res);

    //   notify();
    //   //   alert("users added successfully!!!");
    //   e.target.reset();
    // });

    axios
      .post("https://gentle-wave-76810.herokuapp.com/order", order)
      .then((response) => {
        const { data } = response;
        if (data.insertedId) {
          toast("Your order is booked!!!");
          e.target.reset();
        }
      });
  };

  return (
    <div>
      <Toaster></Toaster>
      <h1 style={{ textAlign: "center", margin: "40px" }}>
        This is CheckOut Details
      </h1>

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          margin: "auto auto",
          gap: "10px",
        }}
      >
        <input
          value={user?.displayName}
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          value={user?.email}
          type="email"
          name="email"
          placeholder="Email"
        />

        <input
          type="text"
          value={services._id}
          name="productid"
          placeholder="productid"
          required
          readOnly
        />
        <input
          type="text"
          value={services.name}
          name="serviceName"
          placeholder="Service Name"
          required
          readOnly
        />
        <input
          type="text"
          value={services.price}
          name="price"
          placeholder="Service Price"
          required
          readOnly
        />
        <input
          type="text"
          name="phone"
          autoComplete="off"
          placeholder="Phone Number"
        />
        <input type="text" name="address" placeholder="Address" />

        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default CheckOutDetails;
