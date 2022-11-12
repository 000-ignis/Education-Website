import React from 'react'
import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from './components/about/About';


function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        {/* <Route exact path='/courses' component={CourseHome} />
        <Route exact path='/team' component={Team} />
        <Route exact path='/pricing' component={Pricing} />
        <Route exact path='/jouranl' component={Blog} />
        <Route exact path='/contact' component={Contact} /> */}

      </Switch>
    </Router>
    </>
  )
}

export default App


