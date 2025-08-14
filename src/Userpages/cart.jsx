import React from "react";
import UserLayout from "../Layout/UserLayout";

export default function CartPage() {
  return (
    <UserLayout>
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
          <select className="border p-1 rounded">
            <option>1</option>
            <option>2</option>
          </select>
          <button className="ml-4 text-gray-500">X</button>
        </div>

    
        <div className="flex items-center border-b py-4">
          <img
            src="https://via.placeholder.com/100"
            alt="product"
            className="w-24 h-24 object-cover"
          />
          <div className="ml-4 flex-1">
            <h2 className="font-semibold">Basic Tee</h2>
            <p className="text-gray-500">Black | Large</p>
            <p className="font-semibold">$32.00</p>
            <p className="text-gray-500 text-sm">Ships in 3–4 weeks</p>
          </div>
          <select className="border p-1 rounded">
            <option>1</option>
            <option>2</option>
          </select>
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
          <span>$112.32</span>
        </div>
        <button className="w-full bg-purple-600 text-white py-2 rounded mt-4">
          Checkout
        </button>
      </div>
    </div>
    </UserLayout>
  );
}
