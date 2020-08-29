import React = require("react");
import "./index.scss";
import { PostModel } from "../../reducers/post-model";
import { fetchPostContent } from "../../networkers/posts-content";
import { ReduxType } from "../../reducers";
import { timeSince } from "../../utils";
import { connect } from "react-redux";

export type PostProps = {
  post?: PostModel;
  reduxDispatch: any;
};

export type PostsState = {
  fetching: boolean;
};

export class PostContent extends React.Component<PostProps, PostsState> {
  state: PostsState = {
    fetching: false,
  };

  constructor(props: any) {
    super(props);
  }

  detailsRef: React.RefObject<HTMLDivElement> = React.createRef();

  async loadPosts(offset: number = 0) {
    const path = location.pathname + location.hash;
    const id = parseInt(path.replace("/#/post/", "") || "0");
    this.setState({
      fetching: true,
    });
    await fetchPostContent(this.props.reduxDispatch, id);
    this.setState({
      fetching: false,
    });
  }

  async componentDidMount() {
    if (this.props.post) {
      this.setContent();
    }
    this.loadPosts();
  }

  getSnapshotBeforeUpdate(
    prevProps: Readonly<PostProps>,
    prevState: Readonly<PostsState>
  ) {
    if (prevProps.post !== this.props.post) {
      return true;
    }
    return null;
  }

  componentDidUpdate(
    prevProps: Readonly<PostProps>,
    prevState: Readonly<PostsState>,
    shouldUpdate: boolean | null
  ) {
    if (shouldUpdate) this.setContent();
  }

  setContent() {
    if (this.props.post && this.detailsRef.current) {
      this.detailsRef.current.innerHTML = this.props.post.content;
    }
  }

  getTime(post: PostModel) {
    return timeSince(post.date);
  }

  render() {
    const post = this.props.post;
    if (post) {
      return (
        <div className={"post-content"}>
          <div className="title row mb-10">
            <div className="col-8">{post.title}</div>
            <div className="col-2 time">{this.getTime(post)}</div>
          </div>
          <div className="row">
            <div
              className="col thumb"
              style={{
                backgroundImage: `url(${post.post_thumbnail.URL})`,
              }}
            />
          </div>
          <div className="row">
            <div ref={this.detailsRef} className="details" />
          </div>
        </div>
      );
    } else if (this.state.fetching) {
      return (
        <div className={"post-content"}>
          <div className={"loading"}>Loading</div>
        </div>
      );
    }
    return <></>;
  }
}

const mapStateToProps = (state: ReduxType) => {
  return {
    post: state.post.content,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    reduxDispatch: dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContent);
