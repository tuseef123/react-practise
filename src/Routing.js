import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Home from "./Home";
import About from "./About";
import Form from "./Form";
import First from "./First";
import Style from "./Style";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";
import Childi from "./Childi";
function Routing() {
  return (
    <div className="container">
      <Router>
        <h2>Accounts</h2>

        <ul>
          <li>
            <Link to="/netflix">Netflix</Link>
          </li>
          <li>
            <Link to="/zillow-group">Zillow Group</Link>
          </li>
          <li>
            <Link to="/yahoo">Yahoo</Link>
          </li>
          <li>
            <Link to="/modus-create">Modus Create</Link>
          </li>
        </ul>
        <Switch>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/form">
            <Form />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
          <Route path="/:id" children={<Childi />} />
        </Switch>
      </Router>
    </div>
  );
}

// function Childi() {
//   // We can use the `useParams` hook here to access
//   // the dynamic pieces of the URL.
//   let { id } = useParams();

//   return (
//     <div>
//       <h3>ID: {id}</h3>
//     </div>
//   );
// }

export default Routing;
