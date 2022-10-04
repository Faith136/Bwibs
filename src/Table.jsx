import { heroData2 } from './Utilis/Data';
import { useState } from 'react';
import React from 'react';
import { NavLink } from 'react-router-dom';
//import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from 'firebase/database';

/*const firebaseConfig = {
  apiKey: "AIzaSyDPhBJZTH9Gyw2lgG3JXX_D1aDqYg8c_cE",
  authDomain: "bwibs-9b3b6.firebaseapp.com",
  projectId: "bwibs-9b3b6",
  storageBucket: "bwibs-9b3b6.appspot.com",
  messagingSenderId: "458317329774",
  appId: "1:458317329774:web:18586db8b2f787edff7d7f"
};*/
//const database = getDatabase();

export default function Table() {
  const [valid, setvalid] = useState(true);
  //const [show, setShow] = useState(true);

  const handleSubmit = (e) => {
   e.preventDefault();   
   const book_email = document.getElementById('book-email');
   const book_date = document.getElementById('book-date');
   const book_time = document.getElementById('book-time');
   const book_number = document.getElementById('book-number');

   if(!book_email.value || !book_date.value || !book_time.value || !book_number.value ){
    alert('Please fill in the above details');
   } else{
    writeUserData();
   }
   function writeUserData() {
    const db = getDatabase();
    set(ref(db, 'data/'), {     
      bookingemail: book_email.value,
      bookingdate: book_date.value,
     bookingtime: book_time.value,
      bookingnumber: book_number.value,
    });
   }
   alert('Your reservation has been confirmed')
const BookPageDiv = document.querySelector('.box');
setvalid(!valid + BookPageDiv.classList.add('show'));
   
  }
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

    <div>
      <div className='w-full px-5 space-y-2 scroll-behaviour'>
      {heroData2 && heroData2.map(n =>(
        <div key={n.id} className='w-full h-auto bg-slate-300 backdrop-blur-md rounded-md flex flex-nowrap'>
<img src={n.imageSrc} className='w-1/2 h-96 py-2 px-6' alt="juice" />


<div className='space-y-3 '>
<p className='text-base font-bold px-3'> {n.name}</p>
<p className='text-base font-semibold px-3'>{n.desc}</p>

<div className='space-y-1'>
  <form action=''  >
      <div className="input data">
      <p>Email:</p>
   <input type='Enter  your email' name='' id='book-email' />
    </div>
    <div className="i">
      <p>Date: </p>
   <input type='date' name='' id='book-date' />
    </div>
    <div className="input data">
      <p>Time: </p>
   <input type='time' name='' id='book-time' />
    </div>
    <div className="input data">
      <p>No.of Guests:</p>
   <input type='guests' name='' id='book-number' />
    </div>
    <div className="input data">
      <p>Meal Period:</p>
   <input type='Mealperiod i.e lunch,breakfast' name='' id='book-meal' />
    </div>
  </form>
</div>

<div className='px-4'>
<p className='text-base font-bold px-3'>
  <button className='bg-cyan-600 px-2 rounded-md' type='submit' onClick={handleSubmit}>RESERVE</button></p>
</div>
</div>
    </div>     
      
      ))
      
       } </div> 
      </div>
      </div>
     );
     }