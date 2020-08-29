import { combineReducers, createStore } from "redux";
import { PostListController, PostListModel } from "./post-list";

export type ReduxType = {
  postList: PostListModel;
};

type SyncReduxType = {
  [P in keyof ReduxType]: (
    state: Pick<ReduxType, P> | any,
    action: any
  ) => Pick<ReduxType, P> | any;
};

const reduxObj: SyncReduxType = {
  postList: PostListController.reducer,
};

const reducer = combineReducers(reduxObj);

export const appStore = createStore(reducer);
