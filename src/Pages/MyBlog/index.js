import { useEffect, useState } from "react";
import axios from "axios";
import MyBlogPreview from "../../components/MyBlogPreview";
import Blognavbar from "../../components/BlogNavbar";
import Authorize from "../../components/Authorize";

const MyBlog = () => {
  const [myBlog, setMyBlog] = useState([]);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    axios
      .get("https://minpro-blog.purwadhikabootcamp.com/api/blog/pagUser", {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setMyBlog(response.data.result);
      });
  },[]);

  return (
    <div>
        <Authorize>
        <Blognavbar/>
        <h2>My Blog</h2>
        <MyBlogPreview myBlog={myBlog&&myBlog}/>
        </Authorize>
    </div>
  );
};

export default MyBlog;
