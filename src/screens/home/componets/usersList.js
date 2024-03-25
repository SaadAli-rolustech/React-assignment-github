import React, { useContext } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import link from "../../../assets/icon-link.png";
import { AppContext } from "../../../shared/appContext";

export const UsersList = ({ data, toggleSidebar }) => {
  const { appSharedObject, setAppSharedObject } = useContext(AppContext);
  const navigate = useNavigate();
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <div className="list-container">
      <ul className="grid_list">
        {data && data.length > 0
          ? data.map((p, pI) => {
              return (
                <li
                  className="card"
                  key={`${pI}${p}`}
                  onClick={() => {
                    setAppSharedObject({
                      ...appSharedObject,
                      userName: p?.login,
                    });
                    navigate("/src/screens/details");
                  }}
                >
                  <div className="background-shade">
                    <img
                      src={p.avatar_url}
                      alt="new"
                      width="80"
                      height="80"
                      className="profile-image"
                    />
                  </div>

                  <p>{capitalizeFirstLetter(p.login)}</p>
                  <a href={p.html_url} target="_blank">
                    <img
                      width={18}
                      height={18}
                      src={link}
                      className="link"
                    ></img>
                    {p.html_url}
                  </a>
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
};
