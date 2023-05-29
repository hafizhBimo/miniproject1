import axios from "axios";
import { useState, useEffect, Children } from "react";
import { FormGroup, Input, Label, Button } from "reactstrap";
import SearchBar from "../SearchBar";
import LikesButton from "../LikesButton";
import { Link } from "react-router-dom";
import BlogCategories from "../BlogCategories";
import Pagination from "../BlogPagination";
import BlogPagination from "../BlogPagination";
import DropdownButton from "../DropdownButton";
import "./style.css"

const BlogPreview = ({}) => {
  const [blogData, setBlogData] = useState([]);
  const [filter, setFilter] = useState({ cat: "", sort: "", page: 1 });
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog?id_cat=${filter.cat}&sort=${filter.sort}&page=${filter.page}`
      )
      .then((response) => {
        setBlogData(response.data.result);
      });
  }, [filter]);
  return (
    <div>
      <div className="filterWrapper">
      <SearchBar setBlogData={setBlogData}/>
      <DropdownButton setFilter={setFilter} filter={filter}/>
      </div>
      <BlogCategories setFilter={setFilter} filter={filter} />
      {blogData.map((data) => {
        const newDate = new Date (data.createdAt)
        return (
          <div key={data.id}>
            <Link to={`/blog/${data.id}`}>
              <h4>{data.title}</h4>
            </Link>
            <p>{data.User.username}</p>
            <h6>{data.content}</h6>
            <p>published {newDate.toDateString()} | {data.Category.name}</p>
            <hr />
          </div>
        );
      })}
      <BlogPagination pages={5} setFilter={setFilter} filter={filter} />
    </div>
  );
};

export default BlogPreview;
