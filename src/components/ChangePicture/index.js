import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Formik, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
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
import ModalSubmitPicture from "../ModalSubmitPicture";

const ChangePicture = () => {
  const token = sessionStorage.getItem("token");
  const navigate = useNavigate();
  const [profile, setProfile] = useState("");
  const handleSubmit = (profileFile, action) => {
    console.log(profileFile.file, "aleale");
    const formData = new FormData();
    formData.append("file", profileFile.file);

    axios
      .post(
        "https://minpro-blog.purwadhikabootcamp.com/api/profile/single-uploaded",
        formData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        setProfile(response.data);
        window.location.reload()
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      navigate("/Profile");
    }, 2000);
  };

  const initialValues = {
    file: null,
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {(props) => (
          <Form onSubmit={props.handleSubmit} id="changeporfile">
            <div id="fileUpload">
              <Label>upload picture here</Label>
              <Input
                type="file"
                name="file"
                id="file"
                className="file"
                onChange={(e) => {
                  props.setFieldValue("file", e.currentTarget.files[0]);
                }}
              />
              <ModalSubmitPicture/>
              {/* <Button type="submit">submit</Button> */}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ChangePicture;
