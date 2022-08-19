import React from "react";



export default function Main() {
   
    return ( 
        <div className="flex w-full h-screen gap-3 py-0 bg-white  backdrop-blur-md rounded-md">
<div className="w-full items-center flex justify-center flex-col h-[600px] py-1 bg-slate-300 backdrop-blur-md rounded-md">
<p className="font-extrabold text-3xl py-2">Hello,Welcome to Bwibo Restaurant.</p>
<p className="py-1  font-bold text-3xl">Get your food delivered to your doorstep from.</p>
<p className="py-1 font-bold text-3xl" text-3xl>our restaurant.Be sure to also reserve a table with the our app.</p>
<p className="py-1 font-bold text-3xl">Track your order inreal time and enjoy.</p>
<img src="i5.png" className="w-[150px] py-14 rounded-full hover:bg-current transition
 duration-300 ease-in-out flex items-center animate-bounce" alt="" />
<p className="py-1 font-bold text-3xl">Click login to get started.</p>

</div>
</div>
    );

}