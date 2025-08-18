import React, { useEffect, useState } from "react";
import UserLayout from "../Layout/UserLayout";
import api from "../api/axios";
import { FunnelIcon } from "lucide-react";

export default function OrderPage() {
    const [orderdata,setOrderData] = useState([])
    useEffect(()=>{
        console.log("inside useeffect");
        
       getOrders()
        
    },[])
    async function getOrders() {
        console.log("inside get orders function");
        
         const orders = await api.get('/placedOrders')
        console.log(orders.data);
        setOrderData(orders.data)
    }
  return (
    <UserLayout>
      <div className="max-w-5xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">My Orders</h1>

        {
            orderdata.map((ele,ind)=>{
                return(
                    <div key={ele._id} className="bg-white shadow-md rounded-lg p-4 mb-6">
       
          <div className="flex justify-between items-center border-b pb-2 mb-4">
            <p className="text-sm text-gray-600">{ele._id}</p>
            <h1 className="px-3 py-1 rounded-full text-sm  ">
              {ele.deliveryStatus}
            </h1>
          </div>

          <div className="space-y-3">
           {
            ele.items.map((pro,ind)=>{
                return(
                    <div className="flex justify-between border-b pb-2">
              <div>
                <p className="font-medium">{pro.productName}</p>
                <p className="text-sm text-gray-600">{pro.productPrice} × {pro.quantity}</p>
              </div>
              <p className="font-semibold">{pro.subtotal}</p>
            </div>
                )
            })
           }
             
                   
            

          </div>

          <div className="flex justify-between mt-4 font-bold">
            <p>Total:</p>
            <p>{ele.total}</p>
          </div>

          <p className="text-xs text-gray-500 mt-2">
            {ele.createdAt}
          </p>
        </div>

                )
            })
        }


       
        

      
      </div>
    </UserLayout>
  );
}
