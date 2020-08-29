import React = require("react");
import "./index.scss";

export type PostsState = {};

export default class PostView extends React.Component<any, PostsState> {
  state: PostsState = {};
  constructor(props: any) {
    super(props);
  }

  render() {
    return <div className={"post-view"}>Post View</div>;
  }
}
