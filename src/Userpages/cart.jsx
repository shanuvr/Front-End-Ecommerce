import React, { useEffect, useState } from "react";
import UserLayout from "../Layout/UserLayout";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { DumbbellIcon } from "lucide-react";

export default function CartPage() {
    const user = localStorage.getItem('user')
    const [carts,setCarts] =useState([])
    const [cartitems,setCartItems]=useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        
       getCart()
        
    },[])
    async function getCart() {
      const user = await api.get('/cart')
      // console.log(user.data.cart[0]);
      setCarts(user.data.cart[0])
      setCartItems(user.data.cart[0].cartitems)
      // console.log(carts);
      

    }
useEffect(() => {
      console.log("Carts :", carts);
      console.log(carts.total);
      
    
  }, [carts]);
  async function handleDelete(id) {
    console.log(id);
    const del = await api.delete(`/cart/${id}`)
    getCart()
  }
  async function handleOrder() {
    console.log("check out worked");
    
    const odr=  await api.post('/order')

    
  }
  return (
    <UserLayout>
        {user ? (
        <div className="max-w-6xl mx-auto p-4 grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>

        {
          cartitems.map((ele,ind)=>{
            return(
                <div className="flex items-center border-b py-4">
          <img
            src={`http://localhost:3000/${ele.image}`}
            alt="product"
            className="w-24 h-24 object-cover"
          />
          <div className="ml-4 flex-1">
            <h2 className="font-semibold">Product name: {ele.name}</h2>
            <p className="text-gray-500">{ele.description}</p>
            <p className="text-gray-500"> Quantity {ele.quantity}</p>
            <p className="font-semibold">Price {ele.price}</p>
            <p className="font-semibold"> Total {ele.subtotal}</p>
          </div>
          <button onClick={()=>{handleDelete(ele.productId)}} className="ml-4 text-gray-500">X</button>
        </div>
            )
          })
        }
           
            

       


      </div>


      <div className="border p-4 rounded">
        <h2 className="text-lg font-semibold mb-4">Order summary</h2>
       
        <div className="flex justify-between py-1">
          <span>Delivery Charge</span>
          <span>$5.00</span>
        </div>
        <div className="flex justify-between py-1">
          <span>GST</span>
          <span>$8.32</span>
        </div>
        <div className="flex justify-between font-bold border-t mt-2 pt-2">
          <span>Order total</span>
          <span>{carts.total}</span>
        </div>
        <button onClick={()=>{handleOrder()}} className="w-full bg-purple-600 text-white py-2 rounded mt-4">
          Checkout
        </button>
      </div>
    </div>
      ) : (
       <div className=" w-screen h-screen flex flex-col justify-center items-center gap-4">
        <h1 className="  text-4xl text-amber-900">Please Login</h1>
        <div className=" transition-all duration-300 hover:scale-90 p-4 rounded-4xl shadow-[8px_3px_10px_5px_rgba(0,_0,_0,_0.1)]">
            <button className=" hover:scale-125 duration-500 text-white text-2xl transition-all px-9 py-3.5 bg-green-700 rounded-4xl " onClick={()=>{navigate('/login')}}> Login</button>
        </div>

       </div>
      )}
    
    </UserLayout>
  );
}
