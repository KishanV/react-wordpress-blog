import React = require("react");
import "./index.scss";
import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import { appStore } from "../reducers";
import { HashRouter, Route } from "react-router-dom";

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

export default hot(() => {
  return (
    <Provider store={appStore}>
      <HashRouter>
        <Route path="/" component={App} />
      </HashRouter>
    </Provider>
  );
});
