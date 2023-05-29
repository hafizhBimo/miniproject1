import axios from "axios";
import { useState, useEffect } from "react";
import { FormGroup, Input, Label, Button, Form, Row, Col } from "reactstrap";
import "./style.css";

const SearchBar = ({ setBlogData }) => {
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .get(
          `https://minpro-blog.purwadhikabootcamp.com/api/blog?search=${message}`
        )
        .then((response) => {
          setBlogData(response.data.result);
        });
    } catch (err) {
      return;
    }
  };
  return (
    <Form>
      <FormGroup className="searchBarWrapper">
        <Input
          id="exampleSearch"
          name="search"
          placeholder="search"
          type="search"
          onChange={handleChange}
          style={{width:"500px"}}
        ></Input>
        <Button type="submit" onClick={(e) => handleSubmit(e)}>
          search
        </Button>
      </FormGroup>
    </Form>
  );
};

export default SearchBar;
