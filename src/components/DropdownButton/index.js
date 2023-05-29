import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import PropTypes from "prop-types";

function DropdownButton({setFilter, filter, direction, ...args }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
        <DropdownToggle caret>sort</DropdownToggle>
        <DropdownMenu {...args}>
          <DropdownItem onClick={()=>setFilter({...filter,sort:"ASC"})}>Ascending</DropdownItem>
          <DropdownItem onClick={()=>setFilter({...filter,sort:""})}>Descending</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

DropdownButton.propTypes = {
  direction: PropTypes.string,
};

export default DropdownButton;
