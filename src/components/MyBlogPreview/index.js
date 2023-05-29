import { useParams } from "react-router-dom";
import { Button } from "reactstrap";
import axios from "axios";
import ModalDeletePost from "../ModalDeletePost";

const MyBlogPreview = ({ myBlog }) => {


  return (
    <div>
      {myBlog?.map((data) => {
        const newDate = new Date(data.createdAt);
        return (
          <div id={data.id}>
            <h4>{data.title}</h4>
            <h6>{data.content}</h6>
            <p>
              {data.Category.name} . published {newDate.toDateString()}
            </p>
            <ModalDeletePost dataId={data.id} />
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default MyBlogPreview;
