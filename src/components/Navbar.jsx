import * as React from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import { NavLink } from "react-router-dom"
import Button from './Button';

export default function Navbar() {
 
         
return( 
        <header className = 'p-2 bg-black flex justify-between items-center'>
          <span>
        <img src='./1.gif'className = 'h-10 inline' alt=''/>
        <h className = "text-white text-3xl font-bold p-3 mr-8"> 
        <NavLink to="Main">BWIBO RESTAURANT
       </NavLink>  </h>
        </span>   
          <ul className ="text-white font-bold sm:self-center text-3xl border-t sm:border-none space-x-7 flex ml-8 p-3">
         
          <li>
          h
            <Button />
          </li>


          <li className = "relative flex item-center justify-center">
          <MdAddShoppingCart className='text-textcolor text-4xl cursor-pointer h-12' />
          <div className='absolute -top-2 -right-3 w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center'>
            <p className='text-xl text-black font-bold'>2</p>
          </div>
           </li>           
           <li>
              <div>
              <NavLink to="Userbox">
                <button>Login</button>
       </NavLink>   
            
        </div> 
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