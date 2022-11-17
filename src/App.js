import React from 'react'
import "./App.css";
import Header from "./components/common/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/home/Home";
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Blog from './components/blog/Blog';


function App() {
  return (
    <>
    <Router>
      <Header />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/courses' exact component={CourseHome} />
        {/* <Route exact path='/team' component={Team} /> */}
        {/* <Route exact path='/pricing' component={Pricing} /> */}
        <Route exact path='/journal' component={Blog} />
        {/* <Route exact path='/contact' component={Contact} /> */}

      </Switch>
    </Router>
    </>
  )
}

export default App


