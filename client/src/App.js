import React from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import './App.css';
import { BrowserRouter as Router ,Routes ,Route } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/"               element={<News key="" category="" />} />
          <Route path="/business"       element={<News key="business" category="business" />} />
          <Route path="/entertainment"  element={<News key="entertainment" category="entertainment" />} />
          <Route path="/health"         element={<News key="health" category="health" />} />
          <Route path="/sports"         element={<News key="sports" category="sports" />} />
          <Route path="/technology"     element={<News key="technology" category="technology" />} />
        </Routes>
      </Router>

    </>
  )
}



