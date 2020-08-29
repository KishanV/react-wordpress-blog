import React = require("react");
import "./index.scss";
import { hot } from "react-hot-loader/root";

export type AppState = {};

export class App extends React.Component<any, AppState> {
  state: AppState = {
    isAdded: false,
  };
  constructor(props: any) {
    super(props);
  }

  render() {
    return <div className={"App"}>Hello world</div>;
  }
}

export default hot(App);
