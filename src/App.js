import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Client from "./components/Client";
import AddRental from "./components/AddRental";
import NotFound from "./components/NotFound"


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
          <Route exact path="/"><Client/></Route>
          <Route exact path="/Add"><AddRental/></Route>
          <Route path="*"><NotFound/></Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
