import React, { useState } from 'react'
import { User, RectangleGoggles } from 'lucide-react'
import { useNavigate, Link } from 'react-router-dom'
import api from '../api/axios'

function UserLogin() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [err, setErr] = useState("")
  const navigate = useNavigate()


  async function logIn() {
    try {
      const log = await api.post('/login', { email, password: pass })
      if (log.data.success) {
        localStorage.setItem('user',true)
        navigate('/')
      }
    } catch (error) {
      setErr(error.response.data.message)
    }
  }

  return (
    <div className='h-screen w-screen flex justify-center items-center px-4'>
      <div className='flex flex-col gap-3 bg-white rounded-2xl w-full max-w-md p-6 sm:p-8 space-y-6 shadow-md justify-center'>
        {err && (<p className="text-red-500 px-[10%]">{err}</p>)}

        <div className='flex flex-col px-[10%]'>
          <label className='mb-1 font-medium flex items-center gap-1'>
            <User /> Email ID
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            className='border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 p-2 rounded'
          />
        </div>

        <div className='flex flex-col px-[10%]'>
          <label className='mb-1 font-medium flex items-center gap-1'>
            <RectangleGoggles /> Password
          </label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            className='border border-gray-300 focus:outline-none focus:ring-1 focus:ring-indigo-500 p-2 rounded'
          />
        </div>

        <div className='flex flex-col px-[10%] mb-4'>
          <button
            onClick={logIn}
            className='bg-green-500 text-white px-4 py-2 rounded-2xl hover:scale-105 transition-colors duration-150'
          >
            Sign In
          </button>
        </div>

        <div className='flex items-center justify-between'>
          <p className='text-gray-700 text-sm'>Don't have an Account?</p>
          <Link to="/register" className='text-md text-gray-900 hover:text-blue-700'>
            Register Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default UserLogin
