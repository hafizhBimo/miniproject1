import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Authorize = ({ children }) => {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  console.log(token, "ini di authorize");
  useEffect( () => {
    if (token) {
      try {
        const response =  axios.get(
          "https://minpro-blog.purwadhikabootcamp.com/api/auth",
          {
            headers: { authorization: `Bearer ${token}` },
          }
        );
      } catch (err) {
        console.error(err.response,"ini error")
      }
    } else {
      alert("please Login first");
      navigate("/Login");
    }
  }, []);
  return children;
};

export default Authorize;
