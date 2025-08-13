import React from 'react'
import { User,RectangleGoggles  } from 'lucide-react'

import { Link } from 'react-router-dom'


function UserLogin() {
  return (
     <div className='h-screen w-screen flex justify-center items-center px-4'>
        
        <div className='flex flex-col gap-3 bg-white rounded-2xl w-full max-w-md p-6 sm:p-8 space-y-6 shadow-md justify-center'>
          
            <div className='flex flex-col px-[10%]'>
                <label className=' mb-1 font-medium'><User/> Email ID</label>
            <input type="text" className='border border-gray-300 focus:outline-none focus:ring-1  focus:ring-indigo-500 '  />
            </div>
            <div className='flex flex-col px-[10%]'>
                <label className=' mb-1 font-medium'> <RectangleGoggles /> Password</label>
            <input  type="password" className='border border-gray-300 focus:outline-none focus:ring-1  focus:ring-indigo-500  p-2 rounded' />
            </div>
            <div className='flex flex-col px-[10%] mb-4'>
                <button className=' bg-green-500 text-white px-4 py-2 rounded-2xl hover:scale-105 transition-colors duration-150 '>Sign In</button>
            </div>

                <div className='flex items-center justify-between'>
               <p className=' text-gray-700 text-sm'>
                Don't have an Account?
               </p>
               <Link to="/register" className=' text-md text-gray-900 hover:text-blue-700'>Register Now</Link>
                </div>
        </div>

    </div>
  )
}

export default UserLogin