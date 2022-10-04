import * as React from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import { NavLink, Link } from "react-router-dom"
import Button from './Button';
import { useState } from 'react';
//import { actionType } from "./Utilis/reducer";


export default function Navbar({ cartItem }) {
 const [isMenu, setisMenu] = useState(true);
 
 
return( 
        <header className = 'p-0 bg-black flex justify-between items-center relative z-[100]'>
          <span>
        <img src='./1.gif'className = 'h-10 inline' alt=''/>
        <h className = "text-white text-3xl font-bold p-3 mr-8"> 
        <NavLink to="Main">
        BWIBO RESTAURANT</NavLink>
         </h>
        </span>   
          <ul className ="relative text-white font-bold sm:self-center text-3xl border-t sm:border-none space-x-7 flex ml-8 p-3">
         
        
          <li className = "relative flex item-center justify-center" >
            <NavLink to="./Cart">
          <MdAddShoppingCart className='text-textcolor text-4xl cursor-pointer h-12' />
          
          <div className='absolute -top-2 -right-3 w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center'>
            <p className='text-xl text-black font-bold'>{cartItem.length}</p>
          </div></NavLink>
           </li>           
           <li className=''>
           <img src="./avatar.png"onClick={() =>setisMenu(!isMenu)} className="w-10 min-w-[60px] h-16min-h-[40px]
            drop-shadow-xl cursor-pointer" alt="userprofile" />
             
          {isMenu &&  (<div className='absolute bg-white flex flex-col px-2 py-3 shadow-xl
            top-13.5 right-0 rounded-lg text-base text-black'>
               <NavLink to="Userbox">
                <button  className='p-2 hover:bg-gray-300 rounded-md'>Login</button>
          </NavLink>

           <Link to="Admin">
           <p className='p-2 hover:bg-gray-300 rounded-md'>Admin</p>
              </Link>
                       
              <Link to="About">
           <p className='p-2 hover:bg-gray-300 rounded-md'>About Us</p>
              </Link>

          <p className='p-2 hover:bg-gray-300 rounded-md'><Button /></p>
          
            
           </div> 
           )
          }
            
           </li>
            </ul>
    
        </header>
        
        );
        }
        //<li className = "">Reserve Table</li>  
        //<span>bag quantity</span><button className='bg-white text-black'>login</button>
         /*<div className='relative'>        
          <li>
            <img src="./avatar.png" className="w-10 min-w-[40px] h-10 min-h-[40px]
            drop-shadow-xl cursor-pointer" alt="userprofile" />
            <div className=' bg-white-200 absolute flex flex-col px-4  shadow-xl rounded-lg text-sm'>
               
            </div>
            </li>
             </div>*/