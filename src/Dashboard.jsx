import React from 'react'
import { MdOutlineKeyboardBackspace, MdShoppingBag, MdShoppingBasket } from 'react-icons/md'
import { useState } from 'react';

import { NavLink } from "react-router-dom";

function Dashboard({ children }) {
    const [open, setOpen] = useState(true);
   const menuItem=[
    {
        path:"/createItem",
        name:"ADD",
        icon:<MdShoppingBasket/>,
    },
    {
        path:"/createItem",
        name:"ORDERS",
        icon:<MdShoppingBag/>,
    },
   ]
  return (
    <div className='flex'>
<div className={`${open ? 'w-64' : 'w-20'} h-screen duration-300 bg-purple-400 relative`}>
    <MdOutlineKeyboardBackspace className='absolute cursor-pointer -right-3 top-9 w-7
    border-2 border-indigo-900 rounded-full' onClick={()=>setOpen(!open)} />
    
    <div className='flex gap-x-4 item-center'>
        <h className={`text-black origin-left text-xl font-extrabold`}>ADMIN</h>
    </div>

    <div className='pt-6 text-gray-700 text-sm flex flex-col h-screen  cursor-pointer p-2
           '>
  {
    menuItem.map((item, index)=>(
        <NavLink to={item.path} key={index} activeclassName="active" className=' flex-row space-x-1 space-y-2 items-center flex'>
            <div className='hover:bg-gray-200 rounded-xl'>{item.icon}</div>
            <div className='hover:bg-gray-200 rounded-xl font-bold text-lg'>{item.name}</div>
        </NavLink>
    ))
  }
    </div>
</div>
    <main>{children}</main>
    
    </div>
  )
}

export default Dashboard