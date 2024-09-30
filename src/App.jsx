import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';



const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<h1>Home</h1>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </>
  )
}

export default App