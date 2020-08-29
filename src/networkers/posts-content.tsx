const axios = require("axios");
import { PostActionTypes } from "../reducers/posts";
import { API_HOST } from "../constants";

export async function fetchPosts(reduxDispatch: any, id: number) {
  let res = await axios({
    method: "get",
    url: `${API_HOST}post?id=${id}`,
  });
  if (res.status) {
    reduxDispatch({
      type: PostActionTypes.Set,
      list: res.data.posts,
    });
  }
}
