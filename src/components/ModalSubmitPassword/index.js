import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ModalSubmitPassword({ args, payload }) {
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const toggle = () => setModal(!modal);

  const handleSubmit = (e) => {
    const token = sessionStorage.getItem("token");
    e.preventDefault();
    try {
      axios
        .patch(
          `https://minpro-blog.purwadhikabootcamp.com/api/auth/changePass`,
          payload,
          {
            headers: {
              authorization: `Bearer ${token}`,
            },
          }
        )
        .then((response) => {
          alert(response.data.message);
          sessionStorage.removeItem("token");
          navigate("/");
        });
    } catch (err) {
      alert(err.response.data);
      return;
    }
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        submit
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Password</ModalHeader>
        <ModalBody>change password?</ModalBody>
        <ModalFooter>
          <Button onClick={(e) => handleSubmit(e)}>submit</Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalSubmitPassword;
