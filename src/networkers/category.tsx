const axios = require("axios");
import { CategoriesActionTypes } from "../reducers/category";
import { API_HOST } from "../constants";

export async function fetchCategory(reduxDispatch: any) {
  let res = await axios({
    method: "get",
    url: `${API_HOST}categories`,
  });
  if (res.status) {
    reduxDispatch({
      type: CategoriesActionTypes.Set,
      list: res.data.categories,
    });
  }
}
