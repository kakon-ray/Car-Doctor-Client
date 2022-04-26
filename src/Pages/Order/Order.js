import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivet from "../../api/axiosPrivet";
import auth from "../../firebase.init";
import "./Order.css";

const Order = () => {
  const [totalOrder, setTotalOrder] = useState();
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    const handleOrder = async () => {
      const url = `https://gentle-wave-76810.herokuapp.com/order?email=${user.email}`;
      try {
        const { data } = await axiosPrivet.get(url);
        setTotalOrder(data);
      } catch (error) {
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    handleOrder();
  }, [user]);

  return (
    <div>
      <h1 className="text-center">Total Order</h1>
      <table id="customers">
        <tr>
          <th>Service Name</th>
          <th>Address</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Order Id</th>
        </tr>

        {totalOrder?.map((item) => {
          return (
            <tr>
              <td>{item?.service}</td>
              <td>{item?.address}</td>
              <td>{item?.email}</td>
              <td>{item?.phone}</td>
              <td>{item?._id}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Order;
