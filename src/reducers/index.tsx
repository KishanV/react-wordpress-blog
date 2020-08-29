import { combineReducers, createStore } from "redux";
import { PostListController, PostList } from "./post-list";

export type ReduxType = {
  posts: PostList;
};

type SyncReduxType = {
  [P in keyof ReduxType]: (
    state: Pick<ReduxType, P> | any,
    action: any
  ) => Pick<ReduxType, P> | any;
};

const reduxObj: SyncReduxType = {
  posts: PostListController.reducer,
};

const reducer = combineReducers(reduxObj);

export const appStore = createStore(reducer);
