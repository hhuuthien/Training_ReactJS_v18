// router
import { createBrowserHistory } from "history";
import { Route, Router, Switch } from "react-router-dom";
import "./App.css";
import HeaderHome from "./components/HeaderHome";
import DemoHOC from "./pages/DemoHOC";
import HomePage from "./pages/HomePage";
import { HomeTemplate } from "./templates/HomeTemplate";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <Switch>
        <HomeTemplate path={"/"} component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
