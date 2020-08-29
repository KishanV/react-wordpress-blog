import React = require("react");
import "./index.scss";
import { ReduxType } from "../../reducers";
import { connect } from "react-redux";
import { PostModel, PostActionTypes } from "../../reducers/post-list";
import { timeSince } from "../../utils";

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

  getTime() {
    return timeSince(this.props.data.date);
  }

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    if (this.detailsRef.current) {
      this.detailsRef.current.innerHTML = this.props.data.excerpt;
    }
  }

  detailsRef: React.RefObject<HTMLDivElement> = React.createRef();

  render() {
    return (
      <div className={"post-summary fancy-hover"} tabIndex={this.props.index}>
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
