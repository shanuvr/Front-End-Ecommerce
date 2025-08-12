import React, { useState } from 'react'
import api from '../api/axios'
import { useNavigate } from 'react-router-dom'

function AdminLogin() {
    const [email,setEmail] =useState("")
    const [password,setPassword] =useState("")
    const [err,setErr] = useState("")
    const navigate= useNavigate()
    async function handleLogin(){
        try{
            const dataToSend = {
                email:email,
                password:password
            }
           
            const admin = await api.post('/admin/login',dataToSend)
            console.log(admin.data.success);
            if(admin.data.success){
                 localStorage.setItem('admin' , true)
                navigate('/admin/dashboard')
            }
            

        }catch(er){
             setErr(er.response.data.message)
        }
    }
  return (
    <div className='h-screen w-screen flex justify-center items-center px-4'>
        
        <div className='flex flex-col gap-3 bg-white rounded-2xl w-full max-w-md p-6 sm:p-8 space-y-6 shadow-md justify-center'>
            {err && <p className="text-red-500 px-[10%]">{err}</p>}
            <div className='flex flex-col px-[10%]'>
                <label className=' mb-1 font-medium'>Email ID</label>
            <input value={email} type="text" className='border border-gray-300 focus:outline-none focus:ring-1  focus:ring-indigo-500 ' onChange={(e)=>{setEmail(e.target.value)}} />
            </div>
            <div className='flex flex-col px-[10%]'>
                <label className=' mb-1 font-medium'>Password</label>
            <input value={password} type="password" className='border border-gray-300 focus:outline-none focus:ring-1  focus:ring-indigo-500  p-2 rounded'  onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div className='flex flex-col px-[10%] mb-4'>
                <button className=' bg-green-500 text-white px-4 py-2 rounded-2xl hover:scale-105 transition-colors duration-150 ' onClick={handleLogin}>Sign In</button>
            </div>

        </div>

    </div>
  )
}

export default AdminLogin