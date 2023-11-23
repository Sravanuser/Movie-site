"use client";
import React,{ useState } from 'react'
import Link from 'next/link';

export default function Page() {
  const [Login, setLogin] = useState(true);
  function handleChange(){
    setLogin(!Login);
  }
    return (
    <div className='h-screen w-screen flex justify-center items-center'>
    {
      Login ? (
      <div className='h-1/2 w-80 flex'>
            <div className='w-full h-full flex flex-col items-center bg-slate-900 text-white'>
              <h1 className='mt-6'>Login Page</h1>
                <div className='w-full flex flex-col justify-center items-center gap-6'>
                    <div className='h-8 w-[75%] mt-6'>
                        <p>username</p>
                        <input type="text" className='h-full w-full text-center border-[1px] border-solid border-black' required placeholder='Username'/>
                    </div>
                    <div className='h-8 w-[75%]'>
                        <p>password</p>
                        <input type="password" required className='h-full w-full text-center border-[1px] border-solid border-black'/>
                    </div>
                        <button className='flex justify-center items-center border-2 outline-none border-none h-8 bg-blue-500 rounded-none mt-4'>Login</button>
                    <div>
                      <Link href="" className='text-sm text-blue-600'>Forgot password?</Link>
                    </div>
                    <div>
                      <p>Dont have an account? <span onClick={()=>handleChange()} className='cursor-pointer text-blue-500 hover:text-red-500'>Register</span></p>
                    </div>
                </div>
            </div>                 
        </div>
        ) : (
          <div className='h-1/2 w-80 flex'>
            <div className='w-full h-full flex flex-col items-center text-white bg-slate-900'>
              <h1 className='mt-4'>Register Page</h1>
                <div className='w-full flex flex-col justify-center items-center gap-8'>
                    <div className='h-8 w-[75%] mt-6'>
                        <p>enter username</p>
                        <input type="text" className='h-full w-full text-center border-[1px] border-solid border-black' required placeholder='Username'/>
                    </div>
                    <div className='h-8 w-[75%]'>
                        <p>enter password</p>
                        <input type="password" required className='h-full w-full text-center border-[1px] border-solid border-black'/>
                    </div>
                    <div className='h-8 w-[75%]'>
                        <p>confirm password</p>
                        <input type="password" required className='h-full w-full text-center border-[1px] border-solid border-black'/>
                    </div>
                        <button className='flex justify-center items-center border-2 outline-none border-none h-8 bg-blue-500 rounded-none mt-4'>Register</button>
                    <div>
                      <p>Already have an account? <span onClick={()=>handleChange()} className='cursor-pointer text-blue-500 hover:text-red-500'>Sign</span></p>
                    </div>
                </div>
            </div>                 
        </div>
        )
    }
    </div>
  )
}
