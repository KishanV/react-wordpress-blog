import React = require("react");
import "./index.scss";
import { hot } from "react-hot-loader/root";
import { Provider } from "react-redux";
import { appStore } from "../reducers";
import { HashRouter, Route, Switch } from "react-router-dom";
import Posts from "../pages/posts";
import PostContent from "../pages/post-content";

export type AppState = {};

class App extends React.Component<any, AppState> {
  state: AppState = {
    isAdded: false,
  };
  constructor(props: any) {
    super(props);
  }

  render() {
    const path = location.pathname + location.hash;
    return (
      <div className={"app"}>
        <div className={"body"}>
          <Switch>
            <Route key={path} path="/post/:id" component={PostContent} />
            <Route key={path} path="/" component={Posts} />
          </Switch>
        </div>
        <div className={"side-bar"}></div>
      </div>
    );
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
