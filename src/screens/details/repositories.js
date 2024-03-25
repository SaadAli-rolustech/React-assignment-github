import React, { useContext, useEffect, useState } from "react";
import "./index.css";
import { CiStar } from "react-icons/ci";
import { IoIosGitBranch } from "react-icons/io";
import { getUserRepositories } from "../../shared/services/github.service";
import { AppContext } from "../../shared/appContext";
import Loader from "../../shared/components/loader";

const Repositories = ({ data }) => {
  const { appSharedObject, setAppSharedObject } = useContext(AppContext);
  const [tabData, setTabData] = useState([]);
  const [loader, setLoader] = React.useState(false);

  useEffect(() => {
    getAllRepos();
  }, []);

  const getAllRepos = () => {
    setLoader(true);
    getUserRepositories(appSharedObject?.userName)
      .then((res) => {
        console.log(res?.data);
        setTabData(res?.data);
        setLoader(false);
      })
      .catch((err) => {});
  };

  return (
    <div style={{ marginTop: 20 }}>
      {loader ? (
        <Loader></Loader>
      ) : (
        tabData?.map((data) => (
          <div className="repo-item-colomn">
            <a href={data?.html_url} target="_blank">
              <h2>{data?.name}</h2>
            </a>
            <p>{data?.description}</p>

            <div className="repo-info">
              <span class="dot"></span>

              <p>{data?.language ? data?.language : "N/A"}</p>

              <CiStar
                style={{
                  alignSelf: "center",
                  marginRight: 10,
                  width: 18,
                  height: 18,
                }}
              />

              <p>{data?.watchers_count}</p>
              <IoIosGitBranch
                style={{
                  alignSelf: "center",
                  marginRight: 10,
                  width: 18,
                  height: 18,
                }}
              />
              <p>{data?.forks_count}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Repositories;
