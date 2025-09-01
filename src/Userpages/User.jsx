import React, { useEffect, useState } from 'react'
import api from '../api/axios'
import UserLayout from '../Layout/UserLayout'
import { useNavigate } from 'react-router-dom'

function User() {
  const navigate = useNavigate()
    const [user,SetUser] = useState("")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [img,setImg] = useState(null)
    const [pass,setPass] = useState("")
    const [id,setId] = useState("")
    const [show,setShow] = useState(false)
    useEffect(()=>{
        getUser()
    },[])
    async function getUser() {
        const userData = await api.get('/getuser')
        console.log(userData.data.userData);
        SetUser(userData.data.userData)
       
        
        
    }
    async function editUser() {
        console.log(id);
    const formData = new FormData();
    if(img){
        formData.append("profilePicture",img)

    }
    formData.append('name',name)
    formData.append('email',email)
    formData.append('password',pass)

        const edit = await api.put(`/edit/${id}`,formData)
        setShow(false)
        getUser()
        
        
    }
  return (
   <UserLayout>
     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">

  <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm text-center">
    

    <div className="flex justify-center mb-4">
      <img
        src={`${api.defaults.baseURL}${user.profilePicture}`}
        alt="profile"
        className="w-28 h-28 rounded-full object-cover border-4"
      />
    </div>


    <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
    <p className="text-gray-500 text-sm">{user.email}</p>

 
    <div className="flex justify-between text-sm text-gray-600 mb-3">
      <span>Password</span>
      <span>********</span>
    </div>

    <button onClick={()=>{setId(user._id);
        setShow(true);
    setId(user._id);
    setName(user.name);   
    setEmail(user.email);
    }} className="mt-4 w-full py-2 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition">
      Edit Profile
    </button>
    <button className='mt-4 w-full py-2 bg-blue-400 hover:bg-blue-500 text-white font-medium rounded-xl transition' onClick={()=>{navigate('/orders')}} >Order History</button>
  </div>
 
    {show&&(
        <div className="fixed inset-0 flex items-center justify-center bg-transparent backdrop-blur-2xl">
  <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 space-y-4">
    <h2 className="text-xl font-semibold text-gray-800 text-center">Edit User</h2>

  
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">Profile Picture</label>
      <input 
        type="file" 
        className="block w-full text-sm text-gray-600 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e)=> setImg(e.target.files[0])}  
      />
    </div>

  
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">Name</label>
      <input 
        type="text"  
        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        value={name} 
        onChange={(e)=> setName(e.target.value)}
      />
    </div>

   
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
      <input 
        type="text"  
        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        value={email} 
        onChange={(e)=> setEmail(e.target.value)}
      />
    </div>

  
    <div>
      <label className="block text-sm font-medium text-gray-600 mb-1">Password</label>
      <input 
        type="password"  
        className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        onChange={(e)=> setPass(e.target.value)}
      />
    </div>

   
    <div className="flex justify-end space-x-3 pt-2">
      <button 
        onClick={()=> setShow(false)} 
        className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 transition"
      >
        Close
      </button>
      <button 
        onClick={editUser} 
        className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </div>
  </div>
</div>

    )}
 
</div>

   </UserLayout>
  )
}

export default User