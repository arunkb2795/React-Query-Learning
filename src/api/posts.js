import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
});

export const getPosts = () => {
  return api.get("/posts").then((response) => response);
};

export const getPostDetails = (id) => {
  return api.get(`/posts/${id}`).then((response) => response.data);
};
