import * as React from "react";
import Navbar from './components/Navbar';
import './App.css';
//import Login from './auth/Login';
import Main from "./components/Main"
//import Button from "./components/Button";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Userbox from "./Userbox";
import Menu from "./Menu";
import Table from "./Table";

//import { Route, Router } from 'react-router-dom';

/*import { useState, useEffect } from 'react';
import Register from './auth/Register';
import Menu from './Menu';
import { auth } from './fire';
import { onAuthStateChanged } from 'firebase/auth';
//import { async } from '@firebase/util';
*/
 function App() {
  return (
  <>   
  <BrowserRouter> 
     <Navbar /> 
        
      
    
     
     <Routes>
      <Route path="/Userbox" element={<Userbox />} />
      <Route path="/Main" element={<Main />} />
      <Route path="/Menu" element={<Menu />}>
      
        </Route>
      <Route path="/Table" element={<Table />} />
      
     </Routes>
   </BrowserRouter> 
    </>
  );
}

export default App;
