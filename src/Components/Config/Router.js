import React from "react";
import Login from '../Screen/Login'
import Home from '../Screen/Home'
import Company from '../Screen/Company'
import User from '../Screen/User'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Routers() {
  return (
    <Router>
      <div>
       

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/"exact>
              <Login/>
              
      
          </Route>
          <Route path="/home" exact>
              <Home/>
      
          </Route>
          <Route path="/Company">
            <Company/>
     
          </Route>
          <Route path='/User'>
            <User/>

          </Route>
        
        </Switch>
      </div>
    </Router>
  );
}
