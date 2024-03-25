import React, { Component, useEffect, useState } from "react";
import "./index.css";
import {
  getAllUsers,
  searchUserFromGithub,
} from "../../shared/services/github.service";
import { NavBar } from "./componets/navBar";
import { SearchBar } from "./componets/searchBar";
import { UsersList } from "./componets/usersList";
import DetailScreen from "../details";
import Loader from "../../shared/components/loader";
const HomeScreen = () => {
  const [usersList, setUsersList] = useState([]);
  const [sideBar, setSideBar] = React.useState(false);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [loader, setLoader] = React.useState(false);

  useEffect(() => {
    getUsers();
  }, [searchKeyword?.length === 0]);

  const getUsers = () => {
    setLoader(true);
    getAllUsers()
      .then((res) => {
        console.log(res?.data);
        setUsersList(res?.data);
        setLoader(false);
      })
      .catch((err) => {});
  };
  const toggleSidebar = () => {
    setSideBar(!sideBar);
  };

  const searchUserKeyword = (search) => {
    setSearchKeyword(search);
  };

  const searchUser = () => {
    setLoader(true);
    searchUserFromGithub(searchKeyword)
      .then((res) => {
        setUsersList(res?.data?.items);
        setLoader(false);
      })
      .catch((err) => {});
  };

  return (
    <div className="app-home">
      <div id="navi">
        <NavBar></NavBar>
        <SearchBar
          searchUserKeyword={searchUserKeyword}
          searchUser={searchUser}
        ></SearchBar>

        {loader ? (
          <Loader></Loader>
        ) : (
          <UsersList
            UsersList
            data={usersList}
            toggleSidebar={toggleSidebar}
          ></UsersList>
        )}
      </div>
    </div>
  );
};
export default HomeScreen;
