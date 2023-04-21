import React from 'react'


function Details() {
  return (
    <div className=''>
     <p>Total no. of orders and table reservations made.</p>
     <div className="grid grid-cols-5 gap-6 py-3">
      <div className='font-semibold text-xl'>
        <h>Name</h>
        <div>Ivy Julie</div>
        <div>Shan Stasha</div>
        <div>Dutchess Kay</div>
        </div>
      <div className='font-semibold text-xl'>
        <h>Item ordered</h>
          <div>Burger</div>
          <div>Fresh Juice</div>
          <div>Goat Meat</div>
        </div>
      <div className='font-semibold text-xl'>
        <h>Date</h>
        <div>12/10/2022</div>
        <div>12/10/2022</div>
        <div>12/10/2022</div>
        </div>
      <div>
        <h>Status</h>
        <div className='py-1'>
      <button className='w-20 bg-emerald-500 rounded-xl font-bold text-1xl'>Confirm</button>
      
     </div>
     <div className='py-1'>
      <button className='w-20 bg-emerald-500 rounded-xl font-bold text-1xl'>Confirm</button>
      
     </div>
     <div className='py-1'>
      <button className='w-20 bg-emerald-500 rounded-xl font-bold text-1xl'>Confirm</button>
      
     </div>
     </div>
     <div>
        <h>Status</h>
        <div className='py-1'>
            <button className='w-20 bg-red-400 rounded-xl font-bold text-1xl'> Delete</button>
     </div>
     <div className='py-1'>
            <button className='w-20 bg-red-400 rounded-xl font-bold text-1xl'> Delete</button>
     </div>
     <div className='py-1'>
            <button className='w-20 bg-red-400 rounded-xl font-bold text-1xl'> Delete</button>
     </div>
     </div>
     </div>
      
    </div>
  )
}

export default Details