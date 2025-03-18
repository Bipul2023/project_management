
import { useEffect, useRef } from 'react';
import './App.css'
import Contracts from './pages/Contracts';
import Dashboard from './pages/Dashboard'
import Invoices from './pages/Invoices';
import Project from './pages/Project'
import Tasks from './pages/Tasks';
import { BrowserRouter, Routes, Route, useLocation } from "react-router";
import LoadingBar from 'react-top-loading-bar';

function App() {
  
  
  // const location = useLocation();

  

  return (
    <BrowserRouter>
      <Routes>
    
        <Route path='/'  element = {<Dashboard/>}/>
        <Route path='/projects'  element = {<Project/>}/>
        <Route path='/tasks'  element = {<Tasks/>}/>
        <Route path='/contracts'  element = {<Contracts/>}/>
        <Route path='/invoices'  element = {<Invoices/>}/>
        {/* <Route path='/c'  element = {<Contracts/>}/> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
