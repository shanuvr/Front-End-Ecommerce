import React, { useEffect, useState } from 'react'
import AdminLayout from '../Layout/AdminLayout'
import api from '../api/axios'

export default function Categories() {
  const [catego,setCatego] =useState([])
  const [name,setName]   = useState("")
  const [des,setDes] = useState("")
  const [showAdd,setShowAdd]= useState(false)
  const [showEdit,setShowEdit]= useState(false)
  const [editName,setEditName] = useState("")
  const [editDes,setEditDes] = useState("")
  const [editId,setEditId] = useState("")
  useEffect(()=>{
    getCategories()
  },[])
   async function getCategories(){
    const cat=await api.get('/admin/categories')
    setCatego(cat.data.categories)
    
    
  }
  async function deleteCategory(id) {
    const result =await api.delete(`/admin/categories/${id}`)
    getCategories()
    
  }
  async function AddCategory() {
    const dataToSend = {
      name:name,
      description:des
    }
    const result = api.post('/admin/categories',dataToSend)
  
    setShowAdd(false)
    getCategories()
    setName("")
    setDes("")
    
  }
  async function editCategory() {
    const dataToSend = {
      name:editName,
      description:editDes
    }
    const edit = await api.put(`/admin/categories/${editId}`,dataToSend)
    getCategories()
    setShowEdit(false)

  }
  return (
    <AdminLayout>
      <h2>categories</h2>
      <button onClick={()=>{
        console.log("show Add button clicked");
        
        setShowAdd(true)}} className=' bg-violet-500 text-white px-8 py-2 rounded-2xl m-2.5 hover:scale-x-105 transition-transform font-bold'>Add Category</button>
      <table className='shadow-2xl  items-center'>
      <thead className='bg-indigo-500 text-white'>
          <tr>
            <th className='py-3 px-4 border-gray-400'>ID</th>
          
            <th className='py-3 px-4 border-gray-400'>Name</th>
            <th className='py-3 px-4 border-gray-400'>Description</th>
            <th className='py-3 px-4 border-gray-400'>ACtion</th>
         
          </tr>
        </thead>
      <tbody className='text-center'>
        {
          catego.map((ele,ind)=>{
            return(
              <tr key={ind}>
          <td className='py-2 px-4 border-gray-100'>{ind+1}</td>
          <td className='py-2 px-4 border-gray-100'>{ele.name}</td>
          <td className='py-2 px-4 border-gray-100'>{ele.description}</td>
          <td className='py-2 px-4 border-gray-100'>
            <button onClick={()=>{
              setEditName(ele.name)
              setEditDes(ele.description)
              setEditId(ele._id)

              setShowEdit(true)}
              } className='bg-purple-700 text-white rounded-2xl px-3 py-1'>Edit</button>
            <button onClick={()=>{deleteCategory(ele._id)}} className='bg-teal-800 text-white rounded-2xl px-3 py-1'>Delete</button>
          </td>
        </tr>

            )
          })
        }
        
      </tbody>

      </table>
      {showAdd && (
       <div className="absolute top-20 right-20 w-3/5 p-6 bg-gray-100 rounded-lg shadow-md flex flex-col gap-6 items-center">
  <div className="w-full flex flex-col gap-1">
    <label htmlFor="category-name" className="font-semibold text-gray-700">Name</label>
    <input
      id="category-name"
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
    />
  </div>

  <div className="w-full flex flex-col gap-1">
    <label htmlFor="category-description" className="font-semibold text-gray-700">Description</label>
    <textarea
      id="category-description"
      value={des}
      onChange={(e) => setDes(e.target.value)}
      className="w-full border border-gray-300 rounded-md px-3 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-green-400"
      rows={4}
    />
  </div>

  <div className="flex gap-5 pt-5">
    <button
      onClick={() => setShowAdd(false)}
      className="bg-red-500 text-white px-5 py-2 rounded-2xl hover:scale-105 transition-transform duration-200"
      type="button"
    >
      Close
    </button>

    <button
      onClick={AddCategory}
      className="bg-green-500 text-white px-5 py-2 rounded-2xl hover:scale-105 transition-transform duration-200"
      type="submit"
    >
      Submit
    </button>
  </div>
</div>

        )}

           {showEdit && (
       <div className="absolute top-20 right-20 w-3/5 p-6 bg-gray-100 rounded-lg shadow-md flex flex-col gap-6 items-center">
  <div className="w-full flex flex-col gap-1">
    <label htmlFor="category-name" className="font-semibold text-gray-700">Name</label>
    <input
    value={editName}
    onChange={(e)=>{setEditName(e.target.value)}}
      id="category-name"
      type="text"
      className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
    />
  </div>

  <div className="w-full flex flex-col gap-1">
    <label htmlFor="category-description" className="font-semibold text-gray-700">Description</label>
    <textarea
    value={editDes}
    onChange={(e)=>{setEditDes(e.target.value)}}
      id="category-description"
      className="w-full border border-gray-300 rounded-md px-3 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-green-400"
      rows={4}
    />
  </div>

  <div className="flex gap-5 pt-5">
    <button
      onClick={() => setShowEdit(false)}
      className="bg-red-500 text-white px-5 py-2 rounded-2xl hover:scale-105 transition-transform duration-200"
      type="button"
    >
      Close
    </button>

    <button
     onClick={()=>{editCategory()}}
      className="bg-green-500 text-white px-5 py-2 rounded-2xl hover:scale-105 transition-transform duration-200"
      type="submit"
    >
      Submit
    </button>
  </div>
</div>

        )}

    </AdminLayout>
  )
}
