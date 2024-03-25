import React, { useContext, useEffect, useState } from "react";
import {
  getUserDetails,
  getUserFollowers,
  getUserFollowings,
  getUserRepositories,
} from "../../shared/services/github.service";
import "./index.css";
import { NavBar } from "../home/componets/navBar";
import { AppContext } from "../../shared/appContext";
import Loader from "../../shared/components/loader";
import { PiUsersBold, PiLinkSimple } from "react-icons/pi";
import { BiBuildingHouse } from "react-icons/bi";
import { GrLocation } from "react-icons/gr";
import Tabbar from "./tabbar";
import Repositories from "./repositories";
import Followers from "./followers";
import Followings from "./followings";

const DetailScreen = () => {
  const { appSharedObject, setAppSharedObject } = useContext(AppContext);
  const [userDetails, setUserDetails] = useState(null);
  const [loader, setLoader] = React.useState(false);
  const [selectedTab, setSelectedTab] = useState("Repositories");
  const [tabData, setTabData] = useState([]);

  useEffect(() => {
    setLoader(true);
    getUserDetails(appSharedObject?.userName)
      .then((res) => {
        console.log(res);
        setUserDetails(res?.data);
        setLoader(false);
      })
      .catch((err) => {});
  }, []);

  return (
    <div className="parent-background">
      <NavBar></NavBar>

      {loader ? (
        <Loader></Loader>
      ) : (
        <div className="container">
          <div className="left">
            <img
              src={userDetails?.avatar_url}
              alt="new"
              className="profile-img"
            />

            <h1>{userDetails?.name}</h1>
            <p className="login">{`@${userDetails?.login}`}</p>
            <div className="followers">
              <PiUsersBold style={{ alignSelf: "center" }} />
              <p>{`${userDetails?.followers} followers · ${userDetails?.following} followings`}</p>
            </div>

            <div className="info">
              {userDetails?.company && (
                <div className="followers">
                  <BiBuildingHouse style={{ alignSelf: "center" }} />

                  <div
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      marginLeft: "10px",
                    }}
                  >
                    {userDetails?.company}
                  </div>
                </div>
              )}
              {userDetails?.location && (
                <div className="followers">
                  <GrLocation style={{ alignSelf: "center" }} />
                  <p>{userDetails?.location}</p>
                </div>
              )}

              <div className="followers">
                <PiLinkSimple style={{ alignSelf: "center" }} />
                <p>
                  <a href={userDetails?.html_url} target="_blank">
                    {userDetails?.html_url}
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="right">
            <Tabbar selectedtab={setSelectedTab}></Tabbar>

            {selectedTab === "Repositories" ? (
              <Repositories data={tabData}></Repositories>
            ) : selectedTab === "Followers" ? (
              <Followers data={tabData}></Followers>
            ) : (
              <Followings data={tabData}></Followings>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
export default DetailScreen;
