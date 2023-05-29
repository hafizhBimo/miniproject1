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
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ModalSubmitPassword from "../ModalSubmitPassword";

const ChangePassword = () => {
  const [payload, setPayload] = useState({
    currentPassword: "",
    password: "",
    confirmPassword: "",
  });
  
  const handleChange = (event, id) => {
    let input = event.target.value;
    switch (id) {
      case 1:
        setPayload({ ...payload, currentPassword: input });
        break;
      case 2:
        setPayload({ ...payload, password: input });
        break;
      case 3:
        setPayload({ ...payload, confirmPassword: input });
        break;

      default:
        break;
    }
  };


  return (
    <Form>
      <FormGroup>
        <Label>Current Password</Label>
        <Input type="text" onChange={(e) => handleChange(e, 1)}></Input>
        <Label>new Password</Label>
        <Input type="text" onChange={(e) => handleChange(e, 2)}></Input>
        <Label>Confirm Passowrd</Label>
        <Input type="text" onChange={(e) => handleChange(e, 3)}></Input>
        <ModalSubmitPassword payload={payload}/>
      </FormGroup>
    </Form>
  );
};

export default ChangePassword;
