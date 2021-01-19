import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    //BEM
    <div className="app">
      <Router>
        <Switch>
          <Route path="/search">
            <h1>This is The search</h1>
          </Route>
          <Route path="/">
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
