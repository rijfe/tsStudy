import React from "react";
import { Route, Switch } from "react-router";
import Main from "./main";
import AfterLogin from "./AfterLogin";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/after" component={AfterLogin} />
    </Switch>
  );
}

export default App;
