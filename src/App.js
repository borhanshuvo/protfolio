import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Project from "./components/Project/Project";
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App-header">
      <Router>
        <Navbar></Navbar>
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
