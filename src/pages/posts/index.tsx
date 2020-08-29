import React = require("react");
import "./index.scss";
import { ReduxType } from "../../reducers";
import { connect } from "react-redux";
import { PostModel, PostActionTypes } from "../../reducers/post-list";
import { fetchPosts } from "../../networkers/posts";
import { PostSummary } from "../../components/post-summary";

export type PostsProps = {
  list: PostModel[];
  reduxDispatch: any;
};

export type PostsState = {
  fetching: boolean;
};
export class Posts extends React.Component<PostsProps, any> {
  state: PostsState = {
    fetching: false,
  };

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className={"posts"}>
        {this.props.list.map((details, index) => {
          return (
            <PostSummary
              key={details.ID}
              index={index}
              data={details}
              reduxDispatch={this.props.reduxDispatch}
            />
          );
        })}
      </div>
    );
  }

  async componentDidMount() {
    if (!this.props.list.length) {
      this.setState({
        fetching: true,
      });
      await fetchPosts(this.props.reduxDispatch, 0);
      this.setState({
        fetching: false,
      });
    }
  }
}

const mapStateToProps = (state: ReduxType) => {
  return {
    list: state.posts.list,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    reduxDispatch: dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
