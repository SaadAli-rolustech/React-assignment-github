import React from "react";
import "../index.css";
import search from "../../../assets/search.png";

export const SearchBar = ({ searchUserKeyword, searchUser }) => {
  return (
    <div className="search-container">
      <h1>Users</h1>
      <p>List of users on this platform</p>

      <div className="parent-search-container">
        <input
          class="base-Input-input"
          className="search"
          placeholder="Search"
          onChange={(e) => {
            searchUserKeyword(e.target.value);
          }}
        ></input>
        <div
          className="search-icon"
          onClick={() => {
            searchUser();
          }}
        >
          <img width={24} height={24} src={search}></img>
        </div>
      </div>
    </div>
  );
};
