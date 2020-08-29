const axios = require("axios");
import { PostActionTypes } from "../reducers/post-list";
import { API_HOST } from "../constants";

export async function fetchPosts(
  reduxDispatch: any,
  offset: number,
  limit: number = 25
) {
  let res = await axios({
    method: "get",
    url: `${API_HOST}posts?offset=${offset}&limit=${limit}`,
  });
  if (res.status) {
    reduxDispatch({
      type: PostActionTypes.Set,
      list: res.data.posts,
    });
  }
}
