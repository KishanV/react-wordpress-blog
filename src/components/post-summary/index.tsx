import React = require("react");
import "./index.scss";
import { ReduxType } from "../../reducers";
import { connect } from "react-redux"; 
import { PostModel } from "../../reducers/post-model";
import { timeSince } from "../../utils";
import { PostContentActionTypes } from "../../reducers/post-content";

type Props = {
  index: number;
  data: PostModel;
  reduxDispatch: any;
};

export type State = {};

export class PostSummary extends React.Component<Props, State> {
  state: State = {
    fetching: false,
  };
  detailsRef: React.RefObject<HTMLDivElement> = React.createRef();

  constructor(props: any) {
    super(props);
  }

  getTime() {
    return timeSince(this.props.data.date);
  }

  componentDidMount() {
    if (this.detailsRef.current) {
      this.detailsRef.current.innerHTML = this.props.data.excerpt;
    }
  }

  onClick = () => {
    this.props.reduxDispatch({
      type: PostContentActionTypes.Set,
      post: this.props.data,
    });
    location.href = `#/post/${this.props.data.ID}`;
  };

  render() {
    return (
      <div
        onClick={this.onClick}
        className={"post-summary fancy-hover"}
        tabIndex={this.props.index}
      >
        <div className="title row mb-10">
          <div className="col-8">
            {this.props.index + 1}. {this.props.data.title}
          </div>
          <div className="col-2 time">{this.getTime()}</div>
        </div>
        <div className="row">
          <div
            className="col-5 thumb"
            style={{
              backgroundImage: `url(${this.props.data.post_thumbnail.URL})`,
            }}
          />
          <div ref={this.detailsRef} className="col-5 details" />
        </div>
      </div>
    );
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

export default connect(mapStateToProps, mapDispatchToProps)(PostSummary);
