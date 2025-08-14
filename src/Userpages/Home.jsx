import React, { useEffect, useState,useRef } from 'react'
import foto from "../assets/fimage.jpg"
import seprate from "../assets/seprate.png"
import UserLayout from '../Layout/UserLayout'
import api from '../api/axios'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate()
  const[products,setProducts] = useState([])
  const scrollRef = useRef(null)

  useEffect(()=>{
    getProducts()
  },[])
   async function getProducts() {
    console.log("get Prodyct fn called");
    const result =  await api.get('/products')
    console.log(result.data.products);
    
    setProducts(result.data.products);
  }
 

  return (
    <UserLayout >
       <div className=' bg-[#f2f0f1] w-screen h-[100vh] flex flex-col sm:flex-row justify-around '>
        <div className=' w-[50%] text-center h-full flex items-center justify-center flex-col '>
          <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold'>
            FIND CLOTHES <br></br> THAT MATCHES<br></br> YOUR STYLE
          </h1>
          <p className=' text-[10px] mx-6 text-gray-500'>
            Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
          </p>
          <button className=' bg-black text-white px-3 py-2 rounded-4xl my-4 text-[16px]'>Shop Now</button>
           <div className='flex w-full items-center justify-center gap-10 '>
          <div> <h1 className='font-bold'>2000+</h1><p className='text-gray-700'>international brands</p></div>
        <div> <h1 className='font-bold'>2000+</h1><p className='text-gray-700'>High Quality Products</p></div>
         <div> <h1 className='font-bold'>3000+</h1><p className='text-gray-700'>Happy Customers</p></div>
        </div>
        </div>
       
        <div>
        <img className='sm:h-full sm:w-auto ' src={foto} alt="" />
        </div>
       </div>


      <div className=''>
      <img src={seprate} alt="" srcset="" />
      </div>
        <h1 className=' text-center font-bold text-2xl'>Latest Arrivals</h1>
      <div className='py-11 flex overflow-x-auto scroll-smooth  gap-10'>
        
        {
          products.map((ele,ind)=>{
            return (
                  <div key={ind} className=" flex-shrink-0 gap-5  max-w-sm border rounded-lg p-4 text-center shadow-sm o" onClick={()=>{ navigate(`/product/${ele._id}`)}}>
        <img src={`http://localhost:3000/${ele.productImage}`} className="mx-auto h-40 object-contain" />
        <h3 className="mt-2 text-lg font-semibold">{ele.productName}</h3>
        <p className="text-xl font-bold">{ele.productPrice}</p>
        <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add to cart
        </button>
      </div>
            )
          })
          
        }

        

      </div>






    </UserLayout>
  )
}

export default Home