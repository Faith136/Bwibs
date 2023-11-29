import React from 'react'
//import { heroData } from './Utilis/Data';
import { NavLink, Outlet } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';



export default function Menu({ heroData, handleAddProduct })  {
const [searchTerm] = useState("");


const searchHandler = () => {};
  return (
    <div className="relative">
      <div className=' flex space-x-4 text-lg font-bold px-5 py-2'>
      <div className=''>   
        <NavLink
        activeClassName='border-indigo-500 text-gray-900'
        
        className=' hover:text-cyan-500 inline-flex px-1 pt-1 border-b-2 border-transparent text-'
        to="/Menu">Menu
       </NavLink>        
        </div>
        <div className=''>
    <NavLink
    activeClassName='border-indigo-500 text-gray-900'
    
    className='hover:text-cyan-500 inline-flex px-1 pt-1 border-b-2 border-transparent text-'
    to="/Table"> Table Reservation
       </NavLink>
       

  </div>
  <div className='bg-gray-200 rounded-full flex justify-items-end px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
        <AiOutlineSearch size={30}  />
        <input
          className='bg-transparent p-2 w-full focus:outline-none'
          type='text'
          placeholder='Search foods'
          term={searchTerm}
          searchKeyword={searchHandler}
                  />
        
      </div>
  </div>


    <div className='w-full grid grid-cols-2 px-1 gap-x-2 gap-y-3'>
    
      {heroData && heroData.map(n =>(
        <div key={n.id} n={n} className='w-full  h-auto'>
        <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/50 rounded-xl text-white'>
          <p className='font-bold text-2xl px-2 pt-4'>{n.name}</p>
          <p className='px-2'>{n.desc}</p>
          <p className='text-base font-extrabold px-3'><span>Ksh.</span>{n.price}</p>
          
            <button className='border-white bg-orange-700 px-6 rounded-md text-black text-lg font-extrabold
           mx-2 absolute bottom-10'
           onClick={() => handleAddProduct(n)}>ORDER NOW</button>
          
          
                     
        </div>
        <img
        className='w-full h-96 object-cover rounded-xl'
        src={n.imageSrc}
          alt='juice'
        />
      </div>


<MdFavoriteBorder className="w-14 h-14" />
       </div>
      
      ))}
       

    
      
  
    
    </div>
    <div><Outlet /></div>
  
    </div>
  );
  }
  /*<div className='flex space-x-4 text-lg font-bold px-5 py-2'>
<div>
  <div class="rounded-full w-18 md:w-12 h-18 md:h-12 overflow-hidden">
                <img class="w-full h-full  object-cover opacity-90" src="juice.png" alt="img" />
                        </div>
                        <p>Break</p>
           </div>  
           <div>
  <div class="rounded-full w-18 md:w-12 h-18 md:h-12 overflow-hidden">
                <img class="w-full h-full object-cover opacity-90" src="burger.png" alt="img" />
                        </div>
                        <p>Lunch</p>
           </div> 
           <div>
  <div class="rounded-full w-18 md:w-12 h-18 md:h-12 overflow-hidden">
                <img class="w-full h-full object-cover opacity-90" src="burger.png" alt="img" />
                        </div>
                        <p>Dinner</p>
           </div>
            </div>       
             */