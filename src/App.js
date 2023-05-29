import React, { useEffect, useState } from "react";
import { Row, Col } from "reactstrap";
import "./App.css";
import RegisterPage from "./Pages/RegisterPage";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/home";
import Blognavbar from "./components/BlogNavbar";
import axios from "axios";
import LoginPage from "./Pages/LoginPage";
import VerifyPage from "./Pages/VerifyPage";
import Verification from "./Pages/Verification";
import { createContext } from "react";
import ProfilePage from "./Pages/ProfilePage";
import PostBlog from "./Pages/PostBlog";
import SinglePage from "./Pages/SinglePage";
import MyBlog from "./Pages/MyBlog";
import Authorize from "./components/Authorize";

function App() {
  return (
    <div>
        <Routes>
          <Route path="Register" element={<RegisterPage />} />
          <Route path="/" element={<Home />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="verify" element={<VerifyPage />} />
          <Route path="/verification/:token" element={<Verification />} />
          <Route path="/Profile" element={<ProfilePage />} />
          <Route path="/Post" element={<PostBlog />} />
          <Route path="/blog/:id" element={<SinglePage />} />
          <Route path="/MyBlog" element={<MyBlog />} />
        </Routes>
    </div>
  );
}

export default App;
