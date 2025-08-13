import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'

function Register() {
    const navigate = useNavigate()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    const [pass2,setPass2]=useState("")
    const [img,setImg] = useState(null)
    const[err,setErr] = useState(false)
    async function handleRegister() {
        if(pass!==pass2){setErr(true)}
        const formData = new FormData();
        formData.append('profilePicture',img)
        formData.append('name',name)
        formData.append('email',email)
        formData.append('password',pass)

        const log = await api.post('/register',formData)
        if(log.data.success);{
            navigate('/login')
        }
        
        
    }
  return (
    <div className='h-screen w-screen items-center justify-center border flex flex-col'>
        <div className='flex flex-col gap-6'>
             <div className=' flex  flex-col '>
                <label>Profile Picture</label>
                <input onChange={(e)=>{setImg(e.target.files[0])}} type="file"  className='border border-gray-500 shadow-lg rounded-2xl h-9  ' />
            </div>
            <div className=' flex  flex-col '>
                <label>Name</label>
                <input value={name} onChange={(e)=>{setName(e.target.value)}} type="text"  className='border border-gray-500 shadow-lg rounded-2xl h-9 ' />
            </div>
            <div className=' flex  flex-col'>
                <label>Email</label>
                <input value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email"  className='border border-gray-500 shadow-lg rounded-2xl h-9 ' />
            </div>
            <div className=' flex  flex-col'>
                <label>Password</label>
                <input value={pass} onChange={(e)=>{setPass(e.target.value)}} type="text"  className='border border-gray-500 shadow-lg rounded-2xl h-9 ' />
            </div>
            <div className=' flex  flex-col'>
                <label>Confirm password</label>
                <input value={pass2} onChange={(e)=>{setPass2(e.target.value)}} type="text"  className='border border-gray-500 shadow-lg rounded-2xl h-9 ' />
            </div>
            <div className=''>
                <button onClick={handleRegister} className=' bg-purple-700 px-8 rounded-4xl text-white hover:scale-105 transition-all hover:bg-purple-500 py-2.5'>
                    Register
                </button>
            </div>
        </div>

    </div>
  )
}

export default Register