import { PostModel } from "./post-model";

export const PostActionTypes = {
  Set: "PostList_Set",
};

export type Posts = {
  list: PostModel[];
};

export class PostsController {
  static value: {
    list: PostModel[];
  } = {
    list: [],
  };

  static reducer(state = PostsController.value, action: any) {
    if (action && action.type === PostActionTypes.Set) {
      state = {
        ...state,
        list: [...state.list, ...action.list],
      };
    }
    console.log("state", state, action);
    return state;
  }

  static setData(list: PostModel[]) {
    return {
      type: PostActionTypes.Set,
      list,
    };
  }
}
