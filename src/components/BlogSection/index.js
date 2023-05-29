import { useEffect, useState } from "react";
import axios from "axios";
import BlogCards from "../BlogCards";
import "./style.css"

const BlogSection = () => {
  const [favData, setfavData] = useState([]);
  const [likes, setLikes] = useState("")

  useEffect(() => {
    axios
      .get("https://minpro-blog.purwadhikabootcamp.com/api/blog/pagFav")
      .then((response) => {
        let array = response.data.result.slice(0, 10);
        setfavData(array);
      });
  }, [likes]);
  return (
    <div>
      <div>
        <h1>trending on <b>Post it!</b></h1>
      </div>
      <div className="blogCardsWrapper">
        <div
          className="blogcards"
          style={{ display: "flex", flexWrap: "wrap", width:"1200px" }}
        >
          {favData.map((data, key) => {
            return <BlogCards data={data} id={key} key={key} blogId={data.id } setLikes={setLikes}/>;
          })}
        </div>
      </div>
    </div>
  );
};

export default BlogSection;
