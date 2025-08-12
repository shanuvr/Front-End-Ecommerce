import React, { useEffect, useState } from 'react'
import AdminLayout from '../Layout/AdminLayout'
import api from '../api/axios'

export default function Users() {
  const [users,setUsers] = useState([])
  console.log("inside usestate");
  
  useEffect(()=>{
      getUsers()
  },[])
  async function getUsers () {
    console.log("inside getusers");
    
    const user = await api.get('/admin/users')
   
    setUsers(user.data)
    
  }
  return (
    <AdminLayout>
      <table class="min-w-full border-collapse block md:table">
  <thead class="block md:table-header-group">
    <tr class="border border-gray-200 md:border-none block md:table-row">
      <th class="p-2 text-left font-medium md:border md:border-gray-200 block md:table-cell">ID</th>
      <th class="p-2 text-left font-medium md:border md:border-gray-200 block md:table-cell">Profile Picture</th>
      <th class="p-2 text-left font-medium md:border md:border-gray-200 block md:table-cell">Name</th>
      <th class="p-2 text-left font-medium md:border md:border-gray-200 block md:table-cell">Email</th>
      
    </tr>
  </thead>
  <tbody class="block md:table-row-group">
    {
      users.map((ele,ind)=>{
        return(
             <tr class="bg-gray-100 border border-gray-200 md:border-none block md:table-row hover:bg-gray-500">
      <td class="p-2 md:border md:border-gray-200 block md:table-cell">{ind+1}</td>
      <td class="p-2 md:border md:border-gray-200 block md:table-cell">
        <img src={`http://localhost:3000/${ele.profilePicture}`} className='w-[80px]' alt=""  />
      </td>
      <td class="p-2 md:border md:border-gray-200 block md:table-cell"> {ele.name}</td>
      <td class="p-2 md:border md:border-gray-200 block md:table-cell">{ele.email}</td>
      
    </tr>

        )
      })
    }
 
  
  </tbody>
</table>
    </AdminLayout>
  )
}
