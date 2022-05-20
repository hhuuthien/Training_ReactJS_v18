// router
import { createBrowserHistory } from "history";
import { Router, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import HomePageMobile from "./pages/HomePageMobile";
import { HomeTemplate } from "./templates/HomeTemplate";

import "../src/assets/styles/index.scss";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path={"/home"} component={<HomePage />} componentMobile={<HomePageMobile />} />
      </Switch>
    </Router>
  );
}

export default App;
