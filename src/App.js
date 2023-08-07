import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import './pages/custom.css'
import Layout from './Layout'
import Home  from './pages/home1';
import Destination from './pages/Destination'
import Contact from './pages/Contacts'
import About from './pages/About'

export default function App(){
return (

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element= {<Home/>}></Route>
        <Route  path='/destination' element= {<Destination/>}></Route>
        <Route  path='/contact' element= {<Contact/>}></Route>
        <Route  path='/about' element= {<About/>}></Route>
        
       
      </Route>
    </Routes>
  </BrowserRouter>
);
}
