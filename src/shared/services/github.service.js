import { OKTCLIENT } from "../config";

let HEADERS = {
  "X-GitHub-Api-Version": "2022-11-28",
};

export const getAllUsers = async () => {
  let usersList = await OKTCLIENT.request("GET /users", {
    headers: HEADERS,
  });
  console.log(usersList);
  return usersList;
};

export const getUserDetails = async (userName) => {
  let user = await OKTCLIENT.request(`GET /users/${userName}`, {
    username: userName,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  return user;
};

export const searchUserFromGithub = async (userName) => {
  let user = await OKTCLIENT.request(`GET /search/users`, {
    q: userName,
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  return user;
};

export const getUserFollowers = async (userName) => {
  let followersList = await OKTCLIENT.request(
    `GET /users/${userName}/followers`,
    {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  return followersList;
};

export const getUserFollowings = async (userName) => {
  let followingList = await OKTCLIENT.request(
    `GET /users/${userName}/following`,
    {
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    }
  );
  return followingList;
};

export const getUserRepositories = async (userName) => {
  let followersList = await OKTCLIENT.request(`GET /users/${userName}/repos`, {
    headers: {
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  return followersList;
};
