import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Project from "./components/Project/Project";

function App() {
  return (
    <div className="App-header">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/project">
            <Project />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
