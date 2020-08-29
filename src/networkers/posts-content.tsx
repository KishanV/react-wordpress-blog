const axios = require("axios");
import { PostContentActionTypes } from "../reducers/post-content";
import { API_HOST } from "../constants";

export async function fetchPostContent(reduxDispatch: any, id: number) {
  let res = await axios({
    method: "get",
    url: `${API_HOST}post?id=${id}`,
  });
  if (res.status) {
    reduxDispatch({
      type: PostContentActionTypes.Set,
      post: res.data,
    });
  }
}
