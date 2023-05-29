import { Formik } from "formik";
import React, { useState } from "react";
import axios from "axios";
import {
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Button,
  Alert,
  Row,
  Col,
} from "reactstrap";
import Blognavbar from "../../components/BlogNavbar";
import "./style.css";
import ModalSubmitPost from "../../components/ModalSubmitPost";
import { useNavigate } from "react-router-dom";

const Write = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate()

  const handleSubmit = (values, action) => {
    const token = sessionStorage.getItem("token");
    const { file, ...v } = values;
    const data = new FormData();
    data.append("data", JSON.stringify(v));
    data.append("file", file);
    axios
      .post("https://minpro-blog.purwadhikabootcamp.com/api/blog", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      .then((response) => {
        setValue(response.data);
        navigate("/")
      })
      .catch((err) => {});
  };

  return (
    <Formik
      initialValues={{
        file: null,
        title: "",
        content: "",
        country: "",
        CategoryId: "",
        keywords: "",
      }}
      // validationSchema={CreateSchema}
      onSubmit={handleSubmit}
    >
      {(props) => (
        <div>
          <Blognavbar />
          <Form id="postBlog" className="postWrapper" onSubmit={props.handleSubmit}>
            <div className="add">
              <div className="content">
                <Input
                  type="text"
                  placeholder="Title"
                  name="title"
                  onChange={props.handleChange}
                  value={props.values.title}
                />
                <Input
                  type="text"
                  placeholder="country"
                  name="country"
                  onChange={props.handleChange}
                  value={props.values.country}
                />
                <Input
                  type="text"
                  placeholder="keywords"
                  name="keywords"
                  onChange={props.handleChange}
                  value={props.values.keywords}
                />

                <div className="editorContainer">
                  <Input
                    type="textarea"
                    className="editor"
                    placeholder="content"
                    onChange={(event) => {
                      props.setFieldValue("content", event.target.value);
                    }}
                    value={props.values.content}
                  />
                </div>
              </div>
              <div className="menu">
                <div className="item">
                  <h1>Publish</h1>
                  <span>
                    <b>Status:</b> Draft
                  </span>
                  <span>
                    <b>Visibility:</b> Public
                  </span>
                  <Input
                    style={{ display: "inline" }}
                    type="file"
                    name="file"
                    id="file"
                    onChange={(e) => {
                      props.setFieldValue("file", e.currentTarget.files[0]);
                    }}
                  />
                  <Label className="file" htmlFor="file">
                    Upload Image
                  </Label>
                  <div className="buttons"></div>
                </div>
                <div className="item">
                  <h1>Category</h1>
                  <div className="cat">
                    <Input
                      type="radio"
                      name="CategoryId"
                      value="1"
                      id="Bisnis"
                      onChange={props.handleChange}
                    />
                    <Label htmlFor="Bisnis">Bisnis</Label>
                  </div>
                  <div className="cat">
                    <Input
                      type="radio"
                      name="CategoryId"
                      value="2"
                      id="Ekonomi"
                      onChange={props.handleChange}
                    />
                    <Label htmlFor="Ekonomi">Ekonomi</Label>
                  </div>
                  <div className="cat">
                    <Input
                      type="radio"
                      name="CategoryId"
                      value="3"
                      id="Teknologi"
                      onChange={props.handleChange}
                    />
                    <Label htmlFor="Teknologi">Teknologi</Label>
                  </div>
                  <div className="cat">
                    <Input
                      type="radio"
                      name="CategoryId"
                      value="4"
                      id="Olahraga"
                      onChange={props.handleChange}
                    />
                    <Label htmlFor="Olahraga">Olahraga</Label>
                  </div>
                  <div className="cat">
                    <Input
                      type="radio"
                      name="CategoryId"
                      value="5"
                      id="Kuliner"
                      onChange={props.handleChange}
                    />
                    <Label htmlFor="Kuliner">Kuliner</Label>
                  </div>
                  <div className="cat">
                    <Input
                      type="radio"
                      name="CategoryId"
                      value="6"
                      id="Internasional"
                      onChange={props.handleChange}
                    />
                    <Label htmlFor="Internasional">Internasional</Label>
                  </div>
                  <div className="cat">
                    <Input
                      type="radio"
                      name="CategoryId"
                      value="7"
                      id="Fiksi"
                      onChange={props.handleChange}
                    />
                    <Label htmlFor="Fiksi">Fiksi</Label>
                  </div>
                    <ModalSubmitPost/>
                </div>
                <form />
              </div>
            </div>
            {JSON.stringify(props.values)}
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default Write;
