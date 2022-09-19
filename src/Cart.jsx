import React from 'react'
import { MdOutlineKeyboardBackspace, MdRemove, MdAdd } from 'react-icons/md'


function cart() {
  return (
    <div className='fixed top-0 w-1/2 right-0 h-screen bg-white drop-shadow-md flex flex-col
    '>
<div className='w-full flex items-center justify-between p-4 cursor-pointer'>
  <MdOutlineKeyboardBackspace className='text-3xl w-20 ' />
<p className='text-textcolor text-lg font-bold'>cart</p>

<p className='flex item-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md
hover:shadow-md duration-100 ease-in-out transition-all cursor-pointer text-base'>Clear</p>
</div>
<div className="w-full h-full bg-gray-100 rounded-t-[2rem] flex flex-col">
  <div className="w-full h-72 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none">
    <div className="w-full p-1 px-2 rounded-lg bg-black flex items-center gap-2">
    <img src='burger.png' alt='' className='w-20 h-20 max-w-[60] rounded-full object-contain' />
    <div className="flex flex-col gap-2">
      <p className='text-lg text-gray-50'> Burger</p>
      <p className='text-sm block text-gray-300 font-semibold'>Ksh.650</p>
    </div>
    <div className="group flex items-center gap-2 ml-auto cursor-pointer">
      <div className="">
        <MdRemove className='text-gray-50'/></div>

      <p className='w-5 h-5 rounded-sm bg-black text-gray-50 flex items-center 
      justify-center'>1</p>

      <div className=""><MdAdd className='text-gray-50'/></div>
    </div>
    </div>
  </div>
  <div className="w-full flex-1 bg-slate-400 rounded-t-[2rem] flex flex-col items-center
  justify-evenly px-8 py-2">
    <div className="w-full flex items-center justify-between">
      <p className='text-black text-lg'>Sub Total</p>
      <p className='text-black text-lg'>ksh.650</p>
    </div>
    <div className="w-full flex items-center justify-between">
      <p className='text-black text-lg'>Delivery</p>
      <p className='text-black text-lg'>Ksh.150</p>
    </div>
    <div className="w-full border-b border-gray-500 my-2"></div>

    <div className="w-full flex items-center justify-between">
      <p className='text-black text-xl font-semibold'>TOTAL</p>
      <p className='text-black text-xl font-semibold'>Ksh.800</p>
    </div>
    
    <div className=''>
    <div>
      <p>Make payments by:</p>
        <input type="checkbox" />
        
        <label className='font-medium text-base'>Cash</label>
    </div>
    <button className='font-medium text-base text-violet bg-white w-full p-2 rounded-lg my-2
    hover:shadow-lg transition-all duration-150 ease-out'>M-PESA</button>
</div>

    <button className='w-1/2 p-2 rounded-full bg-purple-500 text-gray-50 text-lg my-2
    hover:shadow-lg transition-all duration-150 ease-out'>Check Out</button>
  </div>
</div>
    </div>
  )
}

export default cart