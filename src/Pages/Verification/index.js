import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Verification = () => {
  const { token } = useParams();
  const navigate = useNavigate();

  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    //save token ke local storage
    sessionStorage.setItem("token", token);   

    try {
      axios.patch(
        "https://minpro-blog.purwadhikabootcamp.com/api/auth/verify",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      //set success screen
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      return;
    }

    //useNavigate disini
    setTimeout(() => {
      navigate("/login");
    }, 5000);
  }, []);

  return <div style={{marginTop:"50px"}}>"Verification successful!"</div>;
};

export default Verification;
