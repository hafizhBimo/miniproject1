import React from "react";
import {
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  Button,
  Row,
  Col,
} from "reactstrap";
import { Formik, form, field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Blognavbar from "../../components/BlogNavbar";
import { useState } from "react";

const createSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be 6 characters at minimum")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "password must match")
    .required("confirm password is reuquired"),
});

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState({
    password: false,
    confirmPassword: false,
  });

  const handleSubmit = (value, action) => {
    try {
      axios.post("https://minpro-blog.purwadhikabootcamp.com/api/auth/", value);
    } catch (error) {
      return;
    }
    navigate("/verify");
  };

  const handleShowPass = (origin) => {
    if (origin === "password") {
      setShowPass({ ...showPass, password: !showPass.password });
    } else
      setShowPass({ ...showPass, confirmPassword: !showPass.confirmPassword });
  };

  return (
    <div className="contentContainer" style={{ width: "100vw" }}>
      <Row className="navbar">
        <Col>
          <Blognavbar fixed="top" color="white" />
        </Col>
      </Row>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          phone: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={createSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form
            onSubmit={props.handleSubmit}
            style={{ width: "500px", marginTop: "50px" }}
          >
            <h3>Register</h3>
            <FormGroup>
              <Label>username</Label>
              <Input
                required
                type="text"
                name="username"
                onChange={props.handleChange}
                value={props.values.username}
              />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input
                required
                type="email"
                name="email"
                onChange={props.handleChange}
                value={props.values.email}
              />
            </FormGroup>
            <FormGroup>
              <Label>Phone number</Label>
              <Input
                required
                type="phone number"
                name="phone"
                onChange={props.handleChange}
                value={props.values.phone}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                required
                type={showPass.password ? "text" : "password"}
                name="password"
                onChange={props.handleChange}
                value={props.values.password}
              />
              <Button onClick={() => handleShowPass("password")}>
                {showPass.password ? "hide" : "show"}
              </Button>
              <ErrorMessage name="password" component="div" />
            </FormGroup>
            <FormGroup>
              <Label>Confirm Password</Label>
              <Input
                required
                type={showPass.confirmPassword ? "text" : "password"}
                name="confirmPassword"
                onChange={props.handleChange}
                value={props.values.confirmPassword}
              />
              <Button onClick={() => handleShowPass("confirmPassword")}>
                {showPass.confirmPassword ? "hide" : "show"}
              </Button>
            </FormGroup>
            <ErrorMessage name="confirmPassword" component="div" />
            <Button type="submit">Register</Button>
            <br />
            <span>
              Already have an account? <Link to="/login">Login here</Link>
            </span>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterPage;
