import { Button, Col, Nav, NavItem, NavLink, Row } from "reactstrap";
import BlogCarousel from "../../components/BlogCarousel";
import BlogSection from "../../components/BlogSection";
import Blognavbar from "../../components/BlogNavbar";
import BlogPreview from "../../components/BlogPreview";
import BlogCategories from "../../components/BlogCategories";
import "./style.css";
import {
  fetchBlog,
  selectData,
  setBlogData,
} from "../../features/blog/blogSlice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import SinglePage from "../SinglePage";
import Footer from "../../components/Footer";

const Home = () => {
  const blogData = useSelector(selectData);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  if (blogData.loading) {
    return <p>loading</p>;
  }

  const newBlogData = blogData.blogData.result;

  return (
    <div>
      <div className="contentWrapper">
        <div className="contentContainer contentWidth">
          <Row className="navbar">
            <Col>
              <Blognavbar fixed="top" color="white" />
            </Col>
          </Row>
          <Row>
            <Col>
              <BlogCarousel />
            </Col>
          </Row>
          <Row>
            <BlogSection />
          </Row>
          <div className="blogPreviewContainer">
            <Col>
              <h1>blog</h1>
              <BlogPreview />
            </Col>
          </div>
        </div>
      </div>
      <Row>
        <Footer />
      </Row>
    </div>
  );
};

export default Home;
