import axios from "axios";
import React, { useEffect, useState } from "react";

const useToken = (user) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    const getToken = async () => {
      console.log(user);
      const email = user?.user?.email;
      //  this is jwt token api
      if (email) {
        const { data } = await axios.post(
          "https://gentle-wave-76810.herokuapp.com/login",
          {
            email,
          }
        );
        setToken(data.accessToken);
        localStorage.setItem("accessToken", data.accessToken);
      }
    };

    getToken();
  }, [user]);

  return [token];
};

export default useToken;
