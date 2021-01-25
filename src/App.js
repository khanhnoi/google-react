import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
    //BEM
    <div className="app">
      <Router>
        <Switch>
          {/* <Route path="/:term" exact> */}
          <Route path={"/search"} exact>
            {/* This is The search */}
            <SearchPage />
          </Route>
          <Route path="/" exact>
            {/* home */}
            <Home />
          </Route>
        </Switch>
        {/* <h1>Khanh Noi will build a app by React. I comeBack here</h1> */}

        {/* results pgae */}
      </Router>
    </div>
  );
}

export default App;
