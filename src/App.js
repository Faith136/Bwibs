

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
import About from "./About";
import Loader from "./Loader";
import CreateItem from "./CreateItem";
import Cart from "./Cart";
import CartContainer from "./components/CartContainer";
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
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Table" element={<Table />} />
      <Route path="/About" element={<About />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/CartContainer" element={<CartContainer />} />
      <Route path="/Loader" element={<Loader />} />
      <Route path="/CreateItem" element={<CreateItem />} />
     </Routes>
   </BrowserRouter> 
    </>
  );
}

export default App;
