import React, { useEffect, useState } from "react";
import api from "../api/axios";
import { useParams } from "react-router-dom";
import UserLayout from "../Layout/UserLayout"; 

function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);


  useEffect(() => {
    async function getProduct() {
      try {
        const result = await api.get(`/products/${id}`);
        setProduct(result.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    }
    getProduct();
  }, [id]);


  if (!product) {
    return (
      <UserLayout>
        <div className="text-center p-10">Product not found</div>
      </UserLayout>
    );
  }

  return (
    <UserLayout>
      <div className="flex flex-col md:flex-row gap-6 p-6">
        <div className="flex-1 flex justify-center">
          <img
            className="w-full max-w-md h-[400px] object-contain rounded-lg shadow"
            src={`http://localhost:3000/${product.productImage}`}
            alt={product.productName}
          />
        </div>

        <div className="flex-1 flex flex-col justify-center gap-4">
          <h1 className="text-3xl font-bold">{product.productName}</h1>
          <p className="text-gray-600">{product.productDescription}</p>
          <div className="text-2xl font-semibold">
            ${product.productPrice}
          </div>
          <button className="bg-purple-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </UserLayout>
  );
}

export default Product;
