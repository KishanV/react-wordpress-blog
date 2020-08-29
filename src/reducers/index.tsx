import { combineReducers, createStore } from "redux";
import { PostsController, PostsState } from "./posts";
import { PostContentController, PostContentState } from "./post-content";
import { PostModel } from "./post-model";

export type ReduxType = {
  posts: PostsState;
  post: PostContentState;
};

type SyncReduxType = {
  [P in keyof ReduxType]: (
    state: Pick<ReduxType, P> | any,
    action: any
  ) => Pick<ReduxType, P> | any;
};

const reduxObj: SyncReduxType = {
  posts: PostsController.reducer,
  post: PostContentController.reducer,
};

const reducer = combineReducers(reduxObj);

export const appStore = createStore(reducer);
