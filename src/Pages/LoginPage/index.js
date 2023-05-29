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
import { Formik } from "formik";
import { fetchLogin } from "../../features/login/loginSlice";
import { ErrorMessage } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Blognavbar from "../../components/BlogNavbar";
import { useState } from "react";

const LoginPage = () => {
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();
  const createSchema = Yup.object().shape({
    password: Yup.string()
      .min(6, "Password must be 6 characters at minimum")
      .required("Password is required"),
  });

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const dispatch = useDispatch();
  const handleSubmit = (value, action) => {
    dispatch(fetchLogin(value))
      .unwrap()
      .then(() => {
        if (!sessionStorage.getItem("token")) {
          return;
        }
        navigate("/");
        //if token ada, navigate.
      })
      .catch((err) => {
        alert(err);
      });
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
        }}
        validationSchema={createSchema}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form
            onSubmit={props.handleSubmit}
            style={{ width: "500px", marginTop: "50px" }}
          >
            <h3>Login</h3>
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
              <Label>Password</Label>
              <Input
                required
                type={showPass ? "text" : "password"}
                name="password"
                onChange={props.handleChange}
                value={props.values.password}
              />
              <Button onClick={() => handleShowPass()}>
                {showPass ? "hide" : "show"}
              </Button>
              <ErrorMessage name="password" component="div" />
            </FormGroup>
            <Button type="submit">Login</Button>
            <span>
              Don't have an account? <Link to="/Register">Register here</Link>
            </span>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginPage;
