// import logo from './logo.svg';
// import './App.css';
import {Home} from "./Home";
// import * as Home from ".components/Home";

import { BrowserRouter as Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={<Home/>} />
        </Switch>
    </div>
  );
}

export default App;
