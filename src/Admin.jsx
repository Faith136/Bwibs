import React from 'react'

import { useState, useEffect } from 'react';
import Register from './auth/Register';
import { auth } from './fire';
import { onAuthStateChanged } from 'firebase/auth';
import Dashboard from './Dashboard';
import NavPage from './Navpage';


function Admin() {
    const [user, setUser] = useState(null);
    const [authState, setAuthState] = useState(null);

useEffect(() => {
const unSubscribeAuth = onAuthStateChanged(auth,
  async authenticatedUser => {
    if(authenticatedUser) {
      setUser(authenticatedUser.email)
      setAuthState('Menu');
    } else {
      setUser(null);
      setAuthState('Login')
    }
  })

  return unSubscribeAuth;
}, [user])

if(authState === null) return <div className='font-bold text-center'>loading...</div>
if(authState === 'register') return <Register setAuthState={setAuthState} setUser={setUser} />
if(user) return <Dashboard setAuthState={setAuthState} setUser={setUser} />
  return (
    <>
    
       <Register />
       <React.Fragment>
   

    {/* sidebar section */}
    <section>
      
      <div className='grid grid-cols-12 '>
       
        <div className='col-span-3 bg-black pl-2 sm: text-sm md:col-span-2 h-[1500px]'>
            <Dashboard />
        </div>
      

        <div className='col-span-9 h-[1500px] pl-2 md:col-span-10 bg-cyan-400'>
            <NavPage />
        </div>
      </div>
    </section>
  </React.Fragment>
      </>     
    
  )
}

export default Admin