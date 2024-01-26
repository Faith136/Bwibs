import React from "react";


export default function Form({
    setAuthState,
    setUser
}) {
    return (
        <div className="w-full px-8 md:px-24 lg:px-32 xl:px-48">
  <div className='bg-slate-300 px-6 md:px-10 py-8 md:py-15 rounded-3xl border-2'>
    <h4 className='text-3xl md:text-5xl font-semibold'>Login</h4>
    <p className='font-medium text-base md:text-lg text-gray-500 mt-4'>Welcome back, please enter your details</p>
    <div className='mt-6'>

      <div className='mb-4'>
        <label className='text-base md:text-lg font-medium'>Email</label>
        <input
          className='w-full border-2 border-gray-100 rounded-xl p-3 md:p-4 mt-1 bg-transparent'
          placeholder='Enter your email'
        />
      </div>

      <div className='mb-4'>
        <label className='text-base md:text-lg font-medium'>Password</label>
        <input
          className='w-full border-2 border-gray-100 rounded-xl p-3 md:p-4 mt-1 bg-transparent'
          placeholder='Enter your password'
        />
      </div>

      <div className='mt-6 flex justify-between items-center'>
        <div className='flex items-center'>
          <input type="checkbox" className='mr-2' />
          <label className='font-medium text-base md:text-lg'>Remember for 30 days</label>
        </div>
        <button className='font-medium text-base text-violet-500'>Forgot password?</button>
      </div>

      <div className='mt-6 flex flex-col gap-y-4'>
        <button className='active:scale-95 active:duration-75 py-2 md:py-3 rounded-xl bg-violet-500 text-white text-base md:text-lg font-bold'>
          Sign in
        </button>
        <button>
          Sign in with Google
        </button>
      </div>

      <div className="mt-6 flex justify-center items-center">
        <p className="font-medium text-base md:text-lg">Don't have an account?</p>
        <button onClick={() => setAuthState('register')} className="text-violet-500 text-base md:text-lg font-medium ml-2">
          Sign up
        </button>
      </div>

    </div>
  </div>
</div>

    );
}