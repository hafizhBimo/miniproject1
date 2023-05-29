import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import RegisterPage from "../../Pages/RegisterPage";
import { Link } from "react-router-dom";
import "./style.css";

function Blognavbar(args) {
  const NavbarDefault = () => {
    return (
      <NavItem >
        <Link style={{margin:"10px"}} to="/Register">Register</Link>
        <Link to="/Login">Login</Link>
      </NavItem>
    );
  };
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(<NavbarDefault />);
  const NavbarLogged = () => {
    const logout = () => {
      sessionStorage.removeItem("token");
      setIsOpen(false);
    };
    return (
      <NavItem >
        <Link style={{margin:"10px"}} to="/Profile">Profile</Link>
        <Link style={{margin:"10px"}} to="/MyBlog">MyBlog</Link>
        <Link style={{margin:"10px"}} to="/Post">Post</Link>
        <Link style={{margin:"10px"}} to="/" onClick={() => logout()}>
          Logout
        </Link>
      </NavItem>
    );
  };

  useEffect(() => {
    let sessionStorageToken = sessionStorage.getItem("token");
    sessionStorageToken
      ? setNavbar(<NavbarLogged />)
      : setNavbar(<NavbarDefault />);
  }, [isOpen]);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar {...args} className="border">
        <NavbarBrand style={{fontSize:"30px", fontWeight:"bold"}} href="/">Post it!</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            {navbar}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Blognavbar;
