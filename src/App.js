import { FaArrowUp } from "react-icons/fa";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Pages from "./components/Pages";

function App() {
  const handelClickTop = () => {
    window.scroll(0, 0);
  };
  return (
    <div className="App-header overflow-hidden">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Pages />
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <div
          onClick={handelClickTop}
          className="me-md-5 me-3 position-fixed end-0 top-80 cursor-pointer bg-light"
        >
          <FaArrowUp className="scrol-icon" />
        </div>
      </Router>
    </div>
  );
}

export default App;
