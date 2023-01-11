// import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
const App= ()=> {
  const[progress,setProgress]=useState(0)


    return (
      <div>
        <BrowserRouter>
          <LoadingBar
            color='#f11946'
            progress={progress}
          />

          <NavBar />

          <Routes>
            <Route exact path="/" element={<News setProgress={setProgress} country="in" key="general" category="general" />} />
            <Route exact path="/entertainment" element={<News setProgress={setProgress} country="in" key="entertainment" category="entertainment" />} />
            <Route exact path="/general" element={<News setProgress={setProgress} country="in" key="general" category="general" />} />
            <Route exact path="/sports" element={<News setProgress={setProgress} country="in" key="sports" category="sports" />} />
            <Route exact path="/science" element={<News setProgress={setProgress} country="in" key="science" category="science" />} />
            <Route exact path="/business" element={<News setProgress={setProgress} country="in" key="business" category="business" />} />
            <Route exact path="/health" element={<News setProgress={setProgress} country="in" key="health" category="health" />} />
            <Route exact path="/technology" element={<News setProgress={setProgress} country="in" key="business" category="technology" />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  
}

export default App

