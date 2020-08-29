import React = require("react");
import "./index.scss";

export type PostsState = {};

export default class Posts extends React.Component<any, PostsState> {
  state: PostsState = {};
  constructor(props: any) {
    super(props);
  }

  render() {
    return <div className={"posts"}>Posts</div>;
  }
}
