import React from 'react'
import { heroData } from './Utilis/Data';
import { NavLink, Outlet } from "react-router-dom"


export default function Menu()  {
  return (
    <div>
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
  
  </div>
    <div className='w-full grid grid-cols-2 px-1 gap-x-2 gap-y-3'>
      {heroData && heroData.map(n =>(
        <div key={n.id} className='w-full  h-auto px-10 py-2 bg-slate-300 backdrop-blur-md rounded-md shadow-lg'>
<img src={n.imageSrc} className='w-11/12 h-96 py-2 px-4' alt="juice" />
<p className='text-base font-bold px-3'> {n.name}</p>
<p className='text-base font-small px-3'>{n.desc}</p>
<p className='text-base font-extrabold px-3'><span>Ksh.</span>{n.price}</p>
<div className='px-4'>
<p><button className='bg-cyan-400 px-2 rounded-md'>ORDER NOW</button></p>
</div>
       </div>
      
      ))}
       

    
    
    </div>
    <div><Outlet /></div>
  
    </div>
  );
}
// <h className='px-7 text-lg font-semibold'>
/* function NavLink({ to, className,activeClassName, inactiveClassName, ...rest})  {
  let location = useLocation();

let isActive = location.pathname === to;
let allClassName = className + (isActive? ` ${activeClassName}` : ` ${inactiveClassName}`);
return <Link className={allClassName} to={to} {...rest} />;
  }*/