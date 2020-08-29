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
    return (
      <div className={"app"}>
        <Switch>
          <Route path="/post/:id" component={PostContent} />
          <Route path="/" component={Posts} />
        </Switch>
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
