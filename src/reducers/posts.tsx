import { PostModel } from "./post-model";

export const PostActionTypes = {
  Set: "PostList_Set",
};

export type PostsState = {
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
    return state;
  }

  static setData(list: PostModel[]) {
    return {
      type: PostActionTypes.Set,
      list,
    };
  }
}
