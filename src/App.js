import React from 'react'
import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";


function App() {
  return (
    <>
    <Router>
      <Header />
      {/* <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/courses' component={CourseHome} />
        <Route exact path='/team' component={Team} />
        <Route exact path='/pricing' component={Pricing} />
        <Route exact path='/jouranl' component={Blog} />
        <Route exact path='/contact' component={Contact} />

      </Switch> */}
    </Router>
    </>
  )
}

export default App


