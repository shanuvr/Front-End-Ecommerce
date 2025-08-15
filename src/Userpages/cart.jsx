import React, { useEffect, useState } from "react";
import UserLayout from "../Layout/UserLayout";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function CartPage() {
    const user = localStorage.getItem('user')
    const [carts,setCarts] =useState({})
    const navigate = useNavigate()
    useEffect(()=>{
        
       getCart()
        
    },[])
    async function getCart() {
      const user = await api.get('/cart')
      console.log(user.data.cart[0]);
      setCarts(user.data.cart[0])
      console.log(carts);
      

    }
useEffect(() => {
 
      console.log("Carts state has been updated:", carts.cartitems);
    
  }, [carts]);
  return (
    <UserLayout>
        {user ? (
        <div className="max-w-6xl mx-auto p-4 grid md:grid-cols-3 gap-6">
      <div className="md:col-span-2">
        <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>


                   <div className="flex items-center border-b py-4">
          <img
            src="https://via.placeholder.com/100"
            alt="product"
            className="w-24 h-24 object-cover"
          />
          <div className="ml-4 flex-1">
            <h2 className="font-semibold">Basic Tee</h2>
            <p className="text-gray-500">Sienna | Large</p>
            <p className="font-semibold">$32.00</p>
            <p className="text-green-500 text-sm">In stock</p>
          </div>
          <button className="ml-4 text-gray-500">X</button>
        </div>
            

       


      </div>


      <div className="border p-4 rounded">
        <h2 className="text-lg font-semibold mb-4">Order summary</h2>
        <div className="flex justify-between py-1">
          <span>Subtotal</span>
          <span>$99.00</span>
        </div>
        <div className="flex justify-between py-1">
          <span>Shipping estimate</span>
          <span>$5.00</span>
        </div>
        <div className="flex justify-between py-1">
          <span>Tax estimate</span>
          <span>$8.32</span>
        </div>
        <div className="flex justify-between font-bold border-t mt-2 pt-2">
          <span>Order total</span>
          <span>{}</span>
        </div>
        <button className="w-full bg-purple-600 text-white py-2 rounded mt-4">
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
