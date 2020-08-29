const Types = {
  Set: "PostList_Set",
};

export type PostListModel = {};

export class PostListController {
  static value: {
    list: PostListModel[];
  } = {
    list: [],
  };

  static reducer(state = PostListController.value, action: any) {
    if (action && action.type === Types.Set) {
      state.list.concat(action.list);
      state = {
        ...state,
      };
    }
    return state;
  }

  static setData(list: PostListModel[]) {
    return {
      type: Types.Set,
      list,
    };
  }
}
