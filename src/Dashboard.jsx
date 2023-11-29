import React from 'react'
import { MdManageAccounts, MdMenuBook, MdShoppingBasket } from 'react-icons/md'


import { NavLink } from "react-router-dom";
import NavPage from './Navpage';
//import { SidebarData } from './SidebarData'


const Dashboard = () => {
    const activeLink = 'hover:bg-orange-300 mt-7 pl-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold bg-orange-400'
    const normalLink = 'hover:bg-orange-500 pl-7 mt-7 w-full h-14 flex justify-start items-center text-white text-2xl space-x-1 font-bold'
const menuItem=[
    {
        path:"/Admin",
        title:"Dashboard",
        icon:<MdManageAccounts/>,
    },
    {
        path:"/CreateItem",
        title:"ADD",
        icon:<MdShoppingBasket/>,
    },
    {
        path:"/Details",
        title:"ORDERS",
        icon:<MdMenuBook/>,
    },
    
   ]
  return (
    
    <React.Fragment>
    <section>
      
      <div className="text-white ">
      <div className='grid grid-cols-12 '>
       
       <div className='col-span-3 bg-black pl-2 sm: text-sm md:col-span-2 h-[1500px]'>
        <p className='text-black text-md'>ADMIN</p>
          {
               menuItem.map((item, index)=> {
                return(
                    <div key={index}>
                        
                        <NavLink to={item.path}
                        className={({ isActive }) =>
                        isActive ? activeLink: normalLink}
                      
                         >
                        <span>{item.icon}</span>
                        <span>{item.title}</span>
                        </NavLink>
                        
                    </div>
                )
              })
          }
  </div>
  <div className='col-span-9 h-[1500px] pl-2 md:col-span-10 bg-white'>
            <NavPage/>
            
        </div>
  </div>
      </div>
    </section>

  </React.Fragment>
  )
}


export default Dashboard