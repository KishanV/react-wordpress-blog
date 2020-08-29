import React = require("react");
import "./index.scss";

export type PostsState = {};

export default class PostContent extends React.Component<any, PostsState> {
  state: PostsState = {};
  constructor(props: any) {
    super(props);
  }

  componentDidMount(){}

  render() {
    return <div className={"post-view"}>Post View</div>;
  }
}


