
import { Route,Routes } from "react-router-dom"
import AdminDashboard from "./pages/AdminDashboard.jsx"
import Products from "./pages/Products.jsx"
import Categories from "./pages/Categories.jsx"
import Users from "./pages/Users.jsx"
import AdminLogin from "./pages/AdminLogin.jsx"
import Orders from "./pages/Orders.jsx"
import Protected from "./Components/Protected.jsx"
import Home from "./Userpages/Home.jsx"
import UserLogin from "./Userpages/UserLogin.jsx"
import Register from "./Userpages/Register.jsx"
import Product from "./Userpages/Product.jsx"
import CartPage from "./Userpages/cart.jsx"
import Order from "./Userpages/Order.jsx"
import User from "./Userpages/User.jsx"





function App() {

  return (
   <Routes>
    <Route path="/admin/login" element={<AdminLogin/>}/>
    <Route path="/admin/dashboard" element={<Protected><AdminDashboard/></Protected>}/>
    <Route path="/admin/products" element={<Protected><Products/></Protected>}/>
    <Route path="/admin/categories" element={<Protected><Categories/></Protected>}/>
    <Route path="/admin/users" element={<Protected><Users/></Protected>}/>
    <Route path="/admin/orders" element={<Protected><Orders/></Protected>}/>
    <Route path="" element={<Home/>}/>
    <Route path="/login" element={<UserLogin/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/product/:id" element={<Product/>}/>
    <Route path="/cart" element={<CartPage/>}/>
    <Route path="/orders" element={<Order/>}/>
    <Route path="/profile" element={<User/>}/>
    
   
   </Routes>
  )
}

export default App
