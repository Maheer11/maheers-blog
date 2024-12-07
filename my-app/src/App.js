import React from 'react';
import Navbar from './navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Create from './create';
import BlogDetails from './BlogDetails';


function Maheer() {
  const title ='GIST-UP'
return (
    <Router>
     <div className="App">
      <Navbar/>
      <div className="content"> 
        <h1>{title}</h1>
        <Switch>
          <Route  exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>
          </Route>
        </Switch>
      </div>/
    </div>
   </Router>
  );
}

export default Maheer;
