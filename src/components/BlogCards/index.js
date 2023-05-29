import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";
import "./style.css";
import LikesButton from "../LikesButton";
import { Link } from "react-router-dom";

const BlogCards = ({ data, id, blogId, setLikes }) => {


  return (
    <div>
      <div className="blogCardsContainer" key={data.id}>
        <h2>{id + 1}</h2>
        <p></p>
        <Link to={`/blog/${blogId}`}>   
        <h5 className="blogCardsTitle">{data.title}</h5>
        </Link>
      </div>
      <LikesButton blogId={blogId} likes={data.total_fav} setLikes={setLikes}/>
    </div>
  );
};

export default BlogCards;
