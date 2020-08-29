import React = require("react");
import "./index.scss";
import { ReduxType } from "../../reducers";
import { connect } from "react-redux";
import { CategoryModel } from "../../reducers/category-model";
import { fetchCategory } from "../../networkers/category";

export type SidebarProps = {
  categories?: CategoryModel[];
  reduxDispatch: any;
};

export type SidebarState = {
  fetching: boolean;
};
class Sidebar extends React.Component<SidebarProps, any> {
  state: SidebarState = {
    fetching: false,
  };

  constructor(props: any) {
    super(props);
  }

  render() {
    return (
      <div className={"sidebar"}>
        {this.props.categories && (
          <div className={"list"}>
            {this.props.categories.map((category) => {
              return <div className={"item"}>{category.name}</div>;
            })}
          </div>
        )}
      </div>
    );
  }

  async loadCategories(offset: number = 0) {
    this.setState({
      fetching: true,
    });
    await fetchCategory(this.props.reduxDispatch);
    this.setState({
      fetching: false,
    });
  }

  async componentDidMount() {
    if (!this.props.categories) {
      this.loadCategories();
    }
  }
}

const mapStateToProps = (state: ReduxType) => {
  return {
    categories: state.categories.list,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    reduxDispatch: dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
