

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
import { useState } from 'react';
//import { useEffect } from "react";
/*
import Register from './auth/Register';
import Menu from './Menu';
import { auth } from './fire';
import { onAuthStateChanged } from 'firebase/auth';
//import { async } from '@firebase/util';
*/
 function App() {
  
const [show, setShow] = useState();
const [cart, setCart] = useState([]);

const handleClick = (n) => {
  if (cart.indexOf(n) !== -1) return;
  setCart([...cart, n]);
}

const handleChange = (n, d) => {
  const ind = cart.indexOf(n);
  const arr = cart;
  arr[ind].amount += d;

  if (arr[ind].amount === 0) arr[ind].amount = 1; setCart([...arr]);
};

//useEffect(() => {
 // console.log("cart change");
//}, [cart])

  return (
  <>   
  <BrowserRouter> 
     <Navbar setShow={setShow} size={cart.length}/> 
        
      {
        show ? (<Menu handleClick={handleClick}/>) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
        )
      }
    
     
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
