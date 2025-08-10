import React, { useEffect, useState } from 'react'
import AdminLayout from '../Layout/AdminLayout'
import axios from 'axios'
import api from '../api/axios'

export default function Products() {
  const [products,setProducts] = useState([])
  const[cat,setCat]=useState([])
  const [showAddProduct,setshowAddProduct] = useState(false)
  const [name,setName] = useState("")
  const[price,setPrice] = useState("")
  const [catego,setCatego] = useState("")
  const [stock,setStock] = useState("")
  const[des,setDes]=useState("")
  const [img,setImg] = useState(null)
 
  useEffect(()=>{
      getProducts()
     
  },[])
  async function getProducts() {
    console.log("get Prodyct fn called");
    const result =  await api.get('/admin/products')
    setProducts(result.data.products);
  }

   async function getCategories(){
    const cata = await api.get('/admin/categories')
    console.log(cata.data);
    
    setCat(cata.data.categories)
    

   }
   async function AddProducts(){
    try{
     const formData = new FormData();
    formData.append('productImage', img); 
    formData.append('productName', name);
    formData.append('productPrice', price);
    formData.append('productDescription', des);
    formData.append('productCategory', catego);
    formData.append('productStock', stock);

    const addResult=  await api.post('/admin/products',formData,{
      headers:{
        "Content-Type":'multipart/form-data',
      }
    })
    
    getProducts()
    setshowAddProduct(false)
    }catch(err){
      console.log(err);
      
    }

   }

  return (
    <AdminLayout>
      <h1 className='text-center font-bold text-emerald-800 text-3xl'>Products</h1>
      <button  onClick={async()=>{ 
                             await getCategories()
                             setshowAddProduct(true)
                              console.log("add button clicked");
                              
      }} className=' bg-violet-500 text-white px-8 py-2 rounded-2xl m-2.5 hover:scale-x-105 transition-transform font-bold'>Add Product</button>
      <table className='shadow-2xl  items-center'>
      <thead className='bg-indigo-500 text-white'>
          <tr>
            <th className='py-3 px-4 border-gray-400'>ID</th>
            <th className='py-3 px-4 border-gray-400'>Image</th>
            <th className='py-3 px-4 border-gray-400'>Name</th>
            <th className='py-3 px-4 border-gray-400'>Price</th>
            <th className='py-3 px-4 border-gray-400'>Stock</th>
            <th className='py-3 px-4 border-gray-400'>Category</th>
            <th className='py-3 px-4 border-gray-400'>Action</th>
          </tr>
        </thead>
      <tbody className='text-center'>
        {
          products.map((item,ind)=>{
            return (
                <tr key={ind} className='hover:bg-grey-500 cursor-pointer'>
          <td className='py-2 px-4 border-gray-100'>{ind+1}</td>
          <td className='py-2 px-4 border-gray-100'>
            <img src={`http://localhost:3000/${item.productImage}`} className=' w-20' alt="" srcset="" /></td>
          <td className='py-2 px-4 border-gray-100'>{item.productName
}</td>
          <td className='py-2 px-4 border-gray-100'>{item.productPrice}</td>
          <td className='py-2 px-4 border-gray-100'>{item.productStock}</td>
          <td className='py-2 px-4 border-gray-100'>{item.categoryName}</td>
          <td className='py-2 px-4 border-gray-100'>
            <button className='bg-purple-700 text-white rounded-2xl px-3 py-1'>Edit</button>
            <button className='bg-teal-800 text-white rounded-2xl px-3 py-1'>Delete</button>
          </td>
        </tr>
            )
          })
        }
        
      </tbody>

      </table>
      {
        showAddProduct && (
        
          <div className='pt-4 flex flex-col absolute top-20 right-20 bg-gray-100 w-[60%] gap-2 items-center-safe bg-p'>
    
              <div className='flex flex-col  '>
                <label>Image</label>
                <input type="file" name="" id=""  className= ' border-gray-300 border ' onChange={(e)=>{setImg(e.target.files[0])}} />
              </div>
              <div className='flex flex-col gap-2' >
                <label>Name</label>
                <input value={name} className=' border-gray-300 border ' type="text" onChange={(e)=>{setName(e.target.value)}} />
              </div>
              <div className='flex flex-col gap-2'>
                <label>price</label>
                <input value={price} className=' border-gray-300 border  ' type="number" name="" id="" onChange={(e)=>{setPrice(e.target.value)}} />
              </div>
              <div className='flex flex-col gap-2'>
                <label>Description</label>
                <textarea value={des} className=' border-gray-300 border ' name="" id="" onChange={(e)=>{setDes(e.target.value)}}></textarea>
              </div>
              <div className='flex flex-col gap-2' >
                <label>Category</label>
                <select value={catego}
  onChange={(e) => setCatego(e.target.value)}>
                        <option value="">Select</option>
                        {cat.map(c => (
                          <option key={c._id} value={c._id} >{c.name}</option>
                        ))}
                      </select>

              </div>
              <div className='flex flex-col gap-2'>
                <label >Stock</label>
                <input value={stock} className=' border-gray-300 border ' type="number" name="" id="" onChange={(e)=>{setStock(e.target.value)}} />
              </div>
              <div className='flex gap-5 py-7'>
                <button className=' bg-red-400 px-3 py-2 rounded-2xl hover:scale-105 transition-discrete' onClick={()=>{setshowAddProduct(false)}}>Close</button>
                <button className=' bg-green-400 px-3 py-2 rounded-2xl hover:scale-105 transition-discrete' onClick={AddProducts}>Submit</button>
              </div>

          </div>
        )
      }
    </AdminLayout>
  )
}
