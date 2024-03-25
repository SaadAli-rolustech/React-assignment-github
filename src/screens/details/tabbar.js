import React, { useContext, useEffect, useState } from "react";
import styles from "./index.css";
import { tab } from "@testing-library/user-event/dist/tab";
const Tabbar = ({ selectedtab }) => {
  const [selectedTab, setSelectedTab] = useState("Repositories");
  return (
    <div>
      <div className="tabbar">
        <div
          className={selectedTab === "Repositories" ? "selectedtab" : "tab"}
          onClick={() => {
            setSelectedTab("Repositories");
            selectedtab("Repositories");
          }}
        >
          <p>Repositories</p>
        </div>
        <div
          className={selectedTab === "Followers" ? "selectedtab" : "tab"}
          onClick={() => {
            setSelectedTab("Followers");
            selectedtab("Followers");
          }}
        >
          <p>Followers</p>
        </div>
        <div
          className={selectedTab === "Followings" ? "selectedtab" : "tab"}
          onClick={() => {
            setSelectedTab("Followings");
            selectedtab("Followings");
          }}
        >
          <p>Followings</p>
        </div>
      </div>
    </div>
  );
};

export default Tabbar;
