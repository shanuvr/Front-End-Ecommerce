
import { Route,Routes } from "react-router-dom"
import AdminDashboard from "./pages/AdminDashboard"
import Products from "./pages/Products"
import Categories from "./pages/Categories"
import Users from "./pages/Users"
import AdminLogin from "./pages/AdminLogin"
import Orders from "./pages/Orders"
import Protected from "./Components/Protected"
import Home from "./UserPages/Home"
import UserLogin from "./Userpages/UserLogin"
import Register from "./Userpages/Register"




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
    
   
   </Routes>
  )
}

export default App
