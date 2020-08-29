import { PostModel } from "./post-model";

export const PostContentActionTypes = {
  Set: "Post_Content_Set",
};

export type PostContentState = {
  post?: PostModel;
};

export class PostContentController {
  static value: PostContentState = {
    post: undefined,
  };

  static reducer(state = PostContentController.value, action: any) {
    if (action && action.type === PostContentActionTypes.Set) {
      state = {
        ...state,
        post: action.post,
      };
    }
    console.log("state", state, action);
    return state;
  }

  static setData(post: PostModel) {
    return {
      type: PostContentActionTypes.Set,
      post,
    };
  }
}
