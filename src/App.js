import "./App.css";
import Home from "./components/Home/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotMatch from "./components/NotMatch";
import Header from "./components/Header/Header";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header />
          <Home />
        </Route>
        <Route path="/home">
          <Header />
          <Home />
        </Route>
        <Route path="*">
          <Header />
          <NotMatch />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
