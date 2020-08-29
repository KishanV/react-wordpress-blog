export const PostActionTypes = {
  Set: "PostList_Set",
};

export type PostModel = {
  title: string;
  excerpt: string;
  ID: 7941;
  date: string;
  post_thumbnail: {
    ID: 7967;
    URL: string;
    height: number;
    mime_type: string;
    width: number;
  };
};

export type PostList = {
  list: PostModel[];
};

export class PostListController {
  static value: {
    list: PostModel[];
  } = {
    list: [],
  };

  static reducer(state = PostListController.value, action: any) {
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
