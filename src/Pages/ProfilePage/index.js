import Blognavbar from "../../components/BlogNavbar";
import { Row, Col, Button } from "reactstrap";
import { useState, useEffect } from "react";
import axios from "axios";
import ChangePassword from "../../components/ChangePassword";
import Authorize from "../../components/Authorize";
import ChangePicture from "../../components/ChangePicture";

const ProfilePage = () => {
  const [profileData, setProfileData] = useState([]);
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [showChangePicture, setShowChangePicture] = useState(false);

  useEffect(() => {
    let token = sessionStorage.getItem("token");
    axios
      .get("https://minpro-blog.purwadhikabootcamp.com/api/auth/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProfileData(response.data);
      });
  }, []);
  return (
    <div>
      <Authorize>
        <Blognavbar />
        <div className="contentContainer" style={{ width: "50vw" }}>
          <Row>
            <Col>
              <h2>Profile</h2>
            </Col>
            {profileData.imgProfile&&<Col>
              <img style={{width:"500px"}} src={ `https://minpro-blog.purwadhikabootcamp.com/${profileData.imgProfile}` } alt="you haven't uploaded your profile picture" />
            </Col>}
            <h5>username</h5>
            <p>{profileData.username}</p>
            <hr />
            <h5>email</h5>
            <p>{profileData.email}</p>
            <hr />
            <h5>phone number</h5>
            <p>{profileData.phone}</p>
            <hr />
            <Button
              onClick={() => {
                setShowChangePassword(!showChangePassword);
              }}
              style={{ width: "200px" }}
            >
              change password
            </Button>
            {showChangePassword && <ChangePassword />}
            <Button
              onClick={() => {
                setShowChangePicture(!showChangePicture);
              }}
              style={{ width: "200px" }}
            >
              change profile picture
            </Button>
            {showChangePicture&& <ChangePicture/>}
          </Row>
        </div>
      </Authorize>
    </div>
  );
};

export default ProfilePage;
