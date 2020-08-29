import React = require("react");
import "./index.scss";
import { ReduxType } from "../../reducers";
import { connect } from "react-redux";
import { fetchPosts } from "../../networkers/posts";
import { PostSummary } from "../../components/post-summary";
import Button from "../../components/button";
import { PostModel } from "../../reducers/post-model";

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
        {this.props.list.length !== 0 && !this.state.fetching && (
          <div className="row">
            <Button
              aria-disabled={!this.state.fetching}
              onClick={() => {
                console.log(this.props.list);
                this.loadPosts(this.props.list.length);
              }}
            >
              Older Posts
            </Button>
          </div>
        )}
        {this.state.fetching && <div className="loading">Loading Posts...</div>}
      </div>
    );
  }

  async loadPosts(offset: number = 0) {
    this.setState({
      fetching: true,
    });
    await fetchPosts(this.props.reduxDispatch, offset);
    this.setState({
      fetching: false,
    });
  }

  async componentDidMount() {
    if (!this.props.list.length) {
      this.loadPosts();
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
