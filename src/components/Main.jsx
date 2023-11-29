import React from "react";
import { Outlet } from "react-router-dom";
//import Cart from "./Cart";


export default function Main() {
   
    return ( 
        <div className='max-w-[1640px] mx-auto'>
        <div className='max-h-[500px] relative'>
            {/* Overlay */}
            <div className='absolute w-full h-full max-h-[500px] text-white flex flex-col items-center justify-center'>
            
                <p className="font-extrabold text-4xl py-2">Hello,Welcome to Bwibo Restaurant.</p>
<p className="py-1  font-bold text-3xl">Get your food delivered to your doorstep from.</p>
<p className="py-1 font-bold text-3xl" text-3xl>our restaurant.Be sure to also reserve a table with our app.</p>
<img src="Burger.png" className="w-[150px] py-14 rounded-full hover:bg-current transition
 duration-300 ease-in-out flex items-center animate-pulse" alt="" />
<p className="py-1 font-bold text-3xl">Click profile to get started.</p>
                
            </div>
            <img className='w-full max-h-[600px] object-cover'
             src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
        </div>
        <div><Outlet /></div>
    </div>
    
    );

}