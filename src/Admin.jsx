import React from 'react'
import Createitem from './CreateItem'
import { useState, useEffect } from 'react';
import Register from './auth/Register';
import { auth } from './fire';
import { onAuthStateChanged } from 'firebase/auth';


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
if(user) return <Createitem setAuthState={setAuthState} setUser={setUser} />
  return (
    <Register />
  )
}

export default Admin