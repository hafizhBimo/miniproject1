import axios from "axios";
import { useState } from "react";
import './style.css'
import { useNavigate } from "react-router-dom";

const LikesButton = ({ blogId, likes, setLikes,liked }) => {
  const blogLike = liked ? "like" : "liked"
  const [isLike,setIsLike]=useState(blogLike)
  const navigate= useNavigate()
  const handleClick = () => {
    const token = sessionStorage.getItem("token");
    try {
      axios
        .post(
          "https://minpro-blog.purwadhikabootcamp.com/api/blog/like",
          { BlogId: blogId },
          {
            headers: { authorization: `Bearer ${token}` },
          },
          
        )
        .then((response) => {
         setLikes&&setLikes(response)
         liked? setIsLike("liked") : setIsLike("like")
        })
        .catch((err)=>{
          console.log(err)
          alert("you have to login to like this blog")
          navigate("/Login")

        });
    } catch (err) {
      return
    }
  };
  return (
    <><button className={liked?"likedButton":"likesButton"} onClick={() => handleClick()}>{likes?`${likes} likes`:(liked?isLike:"like")}</button></>
  )
   
};

export default LikesButton;
