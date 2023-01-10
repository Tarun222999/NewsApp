// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import {
  BrowserRouter,
  Routes,
  Route,
  
} from "react-router-dom";
export default class App extends Component {

  render() {
    return (
      <div>
            <BrowserRouter>
         <NavBar/>
        <Routes>
        <Route exact  path="/" element={  <News  country="in" key="general" category="general"/> } />
        <Route exact path="/entertainment"  element={  <News  country="in" key="entertainment" category="entertainment"/> } />
        <Route exact path="/general" element={  <News  country="in"  key="general" category="general"/> } />
        <Route exact path="/sports" element={  <News  country="in"  key="sports" category="sports"/> } />
        <Route exact path="/science"  element={  <News  country="in" key="science" category="science"/> } />
        <Route exact path="/business"  element={  <News  country="in" key="business" category="business"/> } />
        <Route exact path="/health" element={  <News  country="in" key="health"  category="health"/> } />
        <Route exact path="/technology" element={  <News  country="in"  key="business" category="technology"/> } />
       </Routes>
       </BrowserRouter>
      </div>
    )
  }
}


