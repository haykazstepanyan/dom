import { BASE_URL } from "./constants.js";

export const fetchData = async (partialUrl) => {
  const url =
    BASE_URL + (partialUrl.startsWith("/") ? partialUrl.slice(1) : partialUrl);

  const response = await fetch(url);
  const posts = await response.json();
  return posts;
};
