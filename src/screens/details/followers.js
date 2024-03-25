import React, { useContext, useEffect, useState } from "react";
import { getUserFollowers } from "../../shared/services/github.service";
import { AppContext } from "../../shared/appContext";
import Loader from "../../shared/components/loader";

const Followers = ({ data }) => {
  const { appSharedObject, setAppSharedObject } = useContext(AppContext);
  const [tabData, setTabData] = useState([]);
  const [loader, setLoader] = React.useState(false);

  useEffect(() => {
    getAllFollowers();
  }, []);

  const getAllFollowers = () => {
    setLoader(true);
    getUserFollowers(appSharedObject?.userName)
      .then((res) => {
        setTabData(res?.data);
        setLoader(false);
      })
      .catch((err) => {});
  };

  return (
    <div style={{ marginTop: 20 }}>
      {loader ? (
        <Loader></Loader>
      ) : tabData?.length > 0 ? (
        tabData.map((data) => (
          <div className="repo-item">
            <img src={data?.avatar_url} alt="new" className="user-img" />

            <div onClick={() => {}}>
              <h4>{data?.login}</h4>
              <a href={data?.html_url} target="_blank">
                {data?.html_url}
              </a>
            </div>
          </div>
        ))
      ) : (
        <h3>There aren't any followers yet</h3>
      )}
    </div>
  );
};

export default Followers;
