import { PostModel } from "./post-model";

export const PostContentActionTypes = {
  Set: "Post_Content_Set",
};

export type PostContentState = {
  content?: PostModel;
};

export class PostContentController {
  static value: PostContentState = {
    content: undefined,
  };

  static reducer(state = PostContentController.value, action: any) {
    if (action && action.type === PostContentActionTypes.Set) {
      state = {
        ...state,
        content: action.post,
      };
    }
    return state;
  }

  static setData(content: PostModel) {
    return {
      type: PostContentActionTypes.Set,
      content,
    };
  }
}
