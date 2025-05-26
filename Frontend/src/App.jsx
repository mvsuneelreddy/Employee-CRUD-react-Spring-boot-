// import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/header/Header';
import { Route, Router, Routes } from 'react-router-dom';
import Nomatch from './pages/noMatch/Nomatch';
import Postuser from './pages/employee/Postuser';
import Dashboard from './pages/dashboard/Dashboard';

function App() {


  return (
    <>
      <Header/>
      <Routes>

        <Route path ="/" element = {<Dashboard/>} />
        <Route path ="/employee" element = {<Postuser/>} />
        <Route path ="*" element = {<Nomatch/>} />
        
      </Routes>
    </>
  )
}

export default App
