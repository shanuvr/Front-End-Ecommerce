import React, { useEffect, useState } from 'react'
import AdminLayout from '../Layout/AdminLayout'
import api from '../api/axios'

function Orders() {
    const [order,serOrder] = useState([])
    const [show,setShow] = useState(false)
    const [delivery,setDelivery] = useState("")
    const [orderid,setOrderid] =useState("")
    useEffect(()=>{
        console.log("inside");
        
        getOrders()
    },[])
    async function getOrders() {
       
        
        const result = await api.get('/admin/orders')
        console.log(result.data.orderdata);
        serOrder(result.data.orderdata)
        
    }
    async function handleUpdate(){
            console.log("inside handlerupdate");
        const upda =  await api.put(`/admin/order/${orderid}`,{deliveryStatus:delivery})
        setShow(false)
        getOrders()
    }
  return (
    <AdminLayout>
        

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                 <th scope="col" class="px-6 py-3">
                      USer name
                </th>
                <th scope="col" class="px-6 py-3">
                    Products
                </th>
                <th scope="col" class="px-6 py-3">
                    Quantity
                </th>
                <th scope="col" class="px-6 py-3">
                    subtotal
                </th>
                <th scope="col" class="px-6 py-3">
                    Total
                </th>
                <th scope="col" class="px-6 py-3">
                    Status
                </th>
                <th scope="col" class="px-6 py-3">
                    action
                </th>
            </tr>
        </thead>
        <tbody>
{order.map((ele, ind) => (
    <tr key={ind} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        {ele.userName}
      </td>
      <td className="px-6 py-4">
        {ele.items.map((item, idx) => (
          <p key={idx}>{item.productName}</p>
        ))}
      </td>
      <td className="px-6 py-4">
        {ele.items.map((item, idx) => (
          <div key={idx}>{item.quantity}</div>
        ))}
      </td>
      <td className="px-6 py-4">
        {ele.items.map((item, idx) => (
          <div key={idx}>{item.subtotal}</div>
        ))}
      </td>
      <td className="px-6 py-4">{ele.total}</td>
      <td className="px-6 py-4">{ele.deliveryStatus}</td>
      <td>
        <button onClick={()=>{
            setOrderid(ele._id)
            setShow(true)}}>Change</button>
      </td>
    </tr>
  ))}
          
            
           
         
        </tbody>
    </table>
</div>
{
    show&&(
        <div className='pb-5 pt-4 flex flex-col rounded-3xl absolute top-20 right-20 bg-gray-100 w-[60%] gap-2 items-center-safe'>
            <button  className='bg-red-400 px-2 py-1 rounded hover:scale-105' onClick={()=>{setShow(false)}}>Close</button>
            <h1>Change Delivery Status</h1>
           <div className='flex flex-col'>
           <div>
              <label>pending</label>
            <input value="pending" type="radio" name="delivery" id="" onChange={(e)=>{setDelivery(e.target.value)}} />
           </div>
           <div>
             <label>shipped</label>
            <input value="shipped" type="radio" name="delivery" id="" onChange={(e)=>{setDelivery(e.target.value)}}/>
           </div>
           <div>
             <label>delivered</label>
            <input value="delivered" type="radio" name="delivery" id="" onChange={(e)=>{setDelivery(e.target.value)}}/>
           </div>
           </div>
            <button className='bg-green-400 px-2 py-1 rounded-2xl hover:scale-110' onClick={()=>{handleUpdate()}}>Update</button>

        </div>
    )
}

    </AdminLayout>
  )
}

export default Orders