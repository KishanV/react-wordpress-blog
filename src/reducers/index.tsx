import { combineReducers, createStore } from "redux";
import { PostsController, Posts } from "./posts";

export type ReduxType = {
  posts: Posts;
};

type SyncReduxType = {
  [P in keyof ReduxType]: (
    state: Pick<ReduxType, P> | any,
    action: any
  ) => Pick<ReduxType, P> | any;
};

const reduxObj: SyncReduxType = {
  posts: PostsController.reducer,
};

const reducer = combineReducers(reduxObj);

export const appStore = createStore(reducer);
