import React from "react";
import { slide as Menu } from "react-burger-menu";
import "../index.css";

const Sidebar = ({ onStateChange, isOpen }) => {
  return (
    <Menu className="sidebar" isOpen={isOpen} onStateChange={onStateChange}>
      <a id="home" className="menu-item">
        Home
      </a>
      <a id="about" className="menu-item">
        About
      </a>
      <a id="contact" className="menu-item">
        Contact
      </a>
    </Menu>
  );
};

export default Sidebar;
