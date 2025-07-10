import React from 'react'
import {BrowserRouter as Router,Routes,Route}from 'react-router-dom'
import Order from './Components/Order'
function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Order />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
