
import './App.css'
import Contracts from './pages/Contracts';
import Dashboard from './pages/Dashboard'
import Invoices from './pages/Invoices';
import Project from './pages/Project'
import Tasks from './pages/Tasks';


import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  

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
