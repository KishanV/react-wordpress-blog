import { combineReducers, createStore } from "redux";
import { PostsController, PostsState } from "./posts";
import { PostContentController, PostContentState } from "./post-content";
import { PostModel } from "./post-model";
import { CategoriesController, CategoriesState } from "./category";

export type ReduxType = {
  posts: PostsState;
  post: PostContentState;
  categories: CategoriesState;
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
  categories: CategoriesController.reducer,
};

const reducer = combineReducers(reduxObj);

export const appStore = createStore(reducer);
