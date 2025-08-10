
import { Route,Routes } from "react-router-dom"
import AdminDashboard from "./pages/AdminDashboard"
import Products from "./pages/Products"
import Categories from "./pages/Categories"
import Users from "./pages/Users"
import AdminLogin from "./pages/AdminLogin"


function App() {

  return (
   <Routes>
    <Route path="/admin/login" element={<AdminLogin/>}/>
    <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
    <Route path="/admin/products" element={<Products/>}/>
    <Route path="/admin/categories" element={<Categories/>}/>
    <Route path="/admin/users" element={<Users/>}/>
   </Routes>
  )
}

export default App
