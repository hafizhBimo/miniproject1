import { useState, useEffect } from "react";
import axios from "axios";
import { Button, Row, Col } from "reactstrap";
import "./style.css";

const BlogCategories = ({ setFilter, filter }) => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    axios
      .get("https://minpro-blog.purwadhikabootcamp.com/api/blog/allCategory")
      .then((response) => {
        setCategoryData(response.data);
      });
  }, []);

  const handleClickCategory = (id) => {
    setFilter({ ...filter, cat: id });
  };

  const styles = {
    backgroundColor:"blue"
  }
  return (
    <div className="categoriesWrapper">
      <div style={{ marginRight: "10px" }}>
        <Button
          onClick={() => {
            setFilter({ ...filter, cat: "" });
          }}
        >
          All
        </Button>
      </div>
      {categoryData.map((data) => {
        let fir = filter.cat===data.id
        return (
          <div style={{ marginRight: "10px" }} key={data.id}>
            <Button style={fir?{backgroundColor:"blue"}:{}} onClick={() => handleClickCategory(data.id)}>
              {data.name}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default BlogCategories;
