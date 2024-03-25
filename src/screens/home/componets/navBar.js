import React from "react";
import "../index.css";
import headerLogo from "../../../assets/headericon.png";
import user from "../../../assets/user.png";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="titleView">
        <img className="headerIcon" src={headerLogo}></img>
        <h1>Assingment</h1>
      </div>

      <div className="infoParent">
        <div className="userInfo">
          <a
            onClick={() => {
              navigate("/src/screens/details");
            }}
          >
            <b>Contact</b>
          </a>
        </div>
        <div className="userInfo">
          <p>
            <b>About</b>
          </p>
        </div>
        <img className="headerIcon" src={user}></img>
        <div className="userInfo">
          <h2>Saad Ali</h2>
          <p>Guest</p>
        </div>
      </div>
    </div>
  );
};
