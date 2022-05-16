import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from "./Home";
import About from './About';
function App() {
  return (
    <Router>
      <Route exact path={"/"} component={Home}></Route>
      <Route exact path={"/about"} component={About}></Route>
    </Router>
  );
}

export default App;
