import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import axios
 from "axios";
import { useNavigate } from "react-router-dom";

function ModalDeletePost({args, dataId}) {
  const [modal, setModal] = useState(false);
  const token = sessionStorage.getItem("token");

  const toggle = () => setModal(!modal);
  const navigate = useNavigate()

  const handleClick = (id) => {
    axios
      .patch(
        `https://minpro-blog.purwadhikabootcamp.com/api/blog/remove/${id}`,
        {
          headers: { authorization: `Bearer ${token}` },
        }
      )
      .then((response) => {
        console.log(response, "ini response delete");
        navigate("/");
      });
  };

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Delete
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Delete post</ModalHeader>
        <ModalBody>Are you sure you want to delete this?</ModalBody>
        <ModalFooter>
          <Button
            onClick={() => {
              handleClick(dataId);
            }}
          >
            {" "}
            delete{" "}
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalDeletePost;
