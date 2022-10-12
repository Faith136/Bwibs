

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
import Admin from "./Admin";
import Loader from "./Loader";
import CreateItem from "./CreateItem";
import Cart from "./Cart";
import CartContainer from "./components/CartContainer";
import { useState } from "react";
import { heroData } from "./Utilis/Data";
import Dashboard from "./Dashboard";
//import { Route, Router } from 'react-router-dom';
//import { useState } from 'react';
//import { useEffect } from "react";
/*
import Register from './auth/Register';
import Menu from './Menu';
import { auth } from './fire';
import { onAuthStateChanged } from 'firebase/auth';
//import { async } from '@firebase/util';
*/
 function App() {
  
  const [cartItem, setCartItem] = useState([]);

  const handleAddProduct = (product) =>{
    const ProductExist = cartItem.find((item) => item.id === product.id);
      if(ProductExist){
        setCartItem(cartItem && cartItem.map((item) => item.id === product.id ? 
        {...ProductExist, quantity: ProductExist.quantity + 1}: item)
        );
      }
      else{
          setCartItem([...cartItem, {...product, quantity: 1}])

        }
    
        }

        const handleRemoveProduct = (product) =>{
          const ProductExist = cartItem.find((item) => item.id === product.id);
            if(ProductExist.quantity === 1){
              setCartItem(cartItem && cartItem.filter((item) => item.id !== product 
             )
              );
            }
            else{
                setCartItem(cartItem.map((item) => item.id === product.id ? 
                {...ProductExist, quantity: ProductExist.quantity - 1} : item));
      
              }
          
              };

             const handleCartClearence = () =>{
              setCartItem([]);
             }

  return (
    
  <BrowserRouter> 
  <> 
     <Navbar cartItem={cartItem} heroData={heroData}/> 
        
     
    
     
     <Routes>
      <Route path="/Userbox" element={<Userbox />} />
      <Route path="/Main" element={<Main />} />
      <Route path="/Menu" element={<Menu heroData={heroData}
       handleAddProduct={handleAddProduct} />} />
      <Route path="/Table" element={<Table />} />
      <Route path="/About" element={<About />} />
      <Route path="/Admin" element={<Admin />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Cart" element={<Cart cartItem={cartItem}
       handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearence={handleCartClearence} />} />
      <Route path="/CartContainer" element={<CartContainer  />} />
      <Route path="/Loader" element={<Loader />} />
      <Route path="/CreateItem" element={<CreateItem />} />
     </Routes>
     </>
   </BrowserRouter> 
    
  );
}

export default App;
