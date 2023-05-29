import { Col, Navbar, Row } from "reactstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./style.css";
import Blognavbar from "../../components/BlogNavbar";
import LikesButton from "../../components/LikesButton";
import { number } from "yup";

const SinglePage = () => {
  const token = sessionStorage.getItem("token");
  const [blogData, setBlogData] = useState({});
  const [date, setDate] = useState("");
  const [liked, setLiked] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    getBlogData();
    if (token) {
      getBlogLikes();
    }
  }, []);

  const getBlogData = () => {
    axios
      .get(`https://minpro-blog.purwadhikabootcamp.com/api/blog/${id}`)
      .then((response) => {
        setBlogData(response.data[0]);
        let createdAt = new Date(response.data[0]?.createdAt);
        setDate(createdAt?.toDateString());
      });
  };

  const getBlogLikes = () => {
    axios
      .get("https://minpro-blog.purwadhikabootcamp.com/api/blog/pagLike", {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((response) => {
        response.data.result.filter((data) => {
          if (data.BlogId === Number(id)) {
            setLiked(true);
          }
        });
      })
      .catch((err) => {
        alert("you have to login to like this blog");
      });
  };
  return (
    <div>
      <Blognavbar />
      <div className="singlePageContainer">
        <Row style={{ width: "1000px" }}>
          <Col>
            <div className="imgWrapper">
              <img
                className="imgContainer"
                src={`https://minpro-blog.purwadhikabootcamp.com/${blogData?.imageURL}`}
              />
            </div>
            <h1>{blogData?.title}</h1>
          </Col>
          <h6>{`${blogData?.User?.username} . published ${date} . ${blogData?.Category?.name}`}</h6>
          <h3>{blogData?.content}</h3>
          <LikesButton blogId={id} liked={liked} />
        </Row>
      </div>
    </div>
  );
};

export default SinglePage;
