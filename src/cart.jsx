import React from 'react';
//import { useEffect } from 'react';
import { MdRemove, MdAdd, MdOutlineKeyboardBackspace } from 'react-icons/md'
//import { heroData } from './Utilis/Data';


const Cart = ({ cartItem, handleAddProduct, handleRemoveProduct, handleCartClearence }) =>{
 /* const n = heroData;*/

 const totalprice = cartItem.reduce((price, item) => price + item.quantity * item.price, 
 0
 );
  return (
    <div className='px-14 w-11/12 bg-white drop-shadow-md flex flex-col
    '>
<div className='w-full flex items-center justify-between p-4 cursor-pointer'>
  <MdOutlineKeyboardBackspace className='text-3xl w-20 ' />
<p className='text-textcolor text-lg font-bold'>cart</p>

<p className='flex item-center gap-1 p-1 px-2 my-2 bg-gray-100 rounded-md
hover:shadow-md duration-100 ease-in-out transition-all cursor-pointer text-base'
onClick={() =>handleCartClearence()}>Clear</p>
</div>

{cartItem && cartItem.map((item) =>(
          <div key={item.id}>
<div className="w-full h-32 bg-gray-100  flex flex-col "
>
  <div className="w-full h-20 px-6 py-3 flex flex-col gap-1 ">
    <div className="w-full p-1 px-2 rounded-lg bg-black flex items-center gap-2">
    <img src={item.imageSrc} alt='' className='w-20 h-20 max-w-[60] rounded-full object-contain' />
   
    <div className="flex flex-col gap-2">
      <p className='text-lg text-gray-50'>{item.name}</p>
      <p className='text-sm block text-gray-300 font-semibold'>Ksh.{item.price}</p>
    </div>
    
    <div className="group flex items-center gap-2 ml-auto cursor-pointer">
      <button className="">
        <MdRemove className='text-gray-50'onClick={() =>handleRemoveProduct(item)}
        /></button>

      <p className='w-5 h-5 rounded-sm bg-black text-gray-50 flex items-center 
      justify-center'>{item.quantity}</p>

      <button className=""><MdAdd className='text-gray-50' onClick={() =>handleAddProduct(item)}
      /></button>
      <div>
        <span>{item.price}</span>
        
      </div>
    </div>
    </div>
  </div>
  </div>
  </div>
        ))}

  <div className="w-full flex-1 bg-slate-400 rounded-t-[2rem] flex flex-col items-center
  justify-evenly px-8 ">
    <div className="w-full flex items-center justify-between">
      <p className='text-black text-lg'>Sub Total</p>
      <p className='text-black text-lg'>Ksh.{totalprice}</p>
    </div>
    <div className="w-full flex items-center justify-between">
      <p className='text-black text-lg'>Tax</p>
      <p className='text-black text-lg'>0%</p>
    </div>
    <div className="w-full border-b border-gray-500"></div>

    <div className="w-full flex items-center justify-between">
      <p className='text-black text-xl font-semibold'>TOTAL</p>
      <p className='text-black text-xl font-semibold'>Ksh.{totalprice}</p>
    </div>
    
    <div className='gap-y-2'>
    <div className='gap-y-2'>
      <p>Make payments by:</p>
        <input type="checkbox" />
        
        <label className='font-medium text-base'>Cash</label>
        <div>
        <button className='w-1/8 p-2 rounded-xl bg-green-500 text-gray-50 text-lg 
    hover:shadow-lg transition-all duration-150 ease-out'
    >M-PESA</button>
    </div>
    </div>
        
</div>


    <button className='w-1/4 p-2 rounded-xl bg-purple-500 text-gray-50 text-lg 
    hover:shadow-lg transition-all duration-150 ease-out'
    onClick={() => alert("Order confirmed")}>Confirm Order</button>

  </div>
</div>
  )
}

export default Cart

/*
    <button className='font-medium text-base text-violet bg-white w-full p-2 rounded-lg 
    hover:shadow-lg transition-all duration-150 ease-out'>M-PESA</button>
  <div>
<h2>Cart Items</h2>
<div>{cartItem.length >=1 && (
  <button className='bg-emerald-500 rounded-lg ml-auto' onClick={() =>handleCartClearence()}>Clear Cart</button>
)}</div>
     
      {cartItem.length === 0 &&
      (<div> No items added</div>)}
      
        {cartItem.map((item) =>(
          <div key={item.id}>
      <img src={item.imageSource} alt={item.name}/>
      <div>{item.name}</div>
      <div>{item.price}</div>
      <div className='items-end'>
        <button onClick={() =>handleAddProduct(item)}><MdAdd /></button>
        <h>{item.quantity}</h>
        <button onClick={() =>handleRemoveProduct(item)}><MdRemove /></button>
      </div>
          </div>
        ))}
        <div>
          Total Price
          <div>Ksh{totalprice}</div>
          </div>
      </div>*/
   
    