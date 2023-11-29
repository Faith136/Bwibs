import React from 'react'

function About() {
  return (
    <div>
    <p className='text-lg font-extrabold p-2'>BWIBO RESTAURANT</p>
        <p className='font-semi-bold text-black'>Welcome to our restaurant here,you will be able to know about our location,
            guides of using this web app
        </p>
        <p className='text-lg font-extrabold p-2'> Users Guide</p>
        <p className='font-semi-bold px-4 pointer-events-auto'>Click profile icon </p>
        <p className='font-semi-bold px-4 pointer-events-auto'>Select login sign up if you dont have an account </p>
        <p className='font-semi-bold px-4 pointer-events-auto'>Pick an item or service </p>
        <p className='font-semi-bold px-4 pointer-events-auto'>Check the cart/bill</p>
        <p className='font-semi-bold px-4 pointer-events-auto'> Make payments Click profile and select logout
        </p>
        <p className='text-lg font-extrabold p-2'>Services</p>
        <p className='font-semi-bold text-black'> Food ordering and Table reservation</p>
        <p className='text-lg font-extrabold p-2'>Delivery</p>
        <p className='font-semi-bold text-black'>We  offer delivery of our services but we are yet to implement a system that a
          customer can use it when following up an order.
        </p>
        <p className='font-semi-bold text-black'>To make a follow up of your order please call 
        <span className='font-bold text-md'>+254 700000000</span>.
        </p>
        <p className='text-lg font-extrabold p-2'>Location</p>
        <p className='font-semi-bold text-black'>We are located at Lavington</p>
        
    </div>
  )
}

export default About