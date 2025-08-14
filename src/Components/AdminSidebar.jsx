import React from 'react';
import { HousePlus, PackageSearch, Users, ChartBarStacked,LogOut,ListOrdered  } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import api from '../api/axios';


function AdminSidebar() {
  let navigate = useNavigate()
  const menu = [
    { icon: <HousePlus size={24} />, label: 'Home', path:"/admin/dashboard"},
    { icon: <PackageSearch size={24} />, label: 'Products',path:"/admin/products" },
    { icon: <Users size={24} />, label: 'Users',path:"/admin/users" },
    { icon: <ChartBarStacked size={24} />, label: 'Categories',path:"/admin/categories" },
    { icon: <ListOrdered  size={24} />, label: 'Orders',path:"/admin/orders" },
    

  ];
  async function handleLogout() {
    try{
      const logout= await api.post('/admin/logout')
      localStorage.removeItem('admin')
      navigate('/admin/login')
      
    }catch(err){
      console.log(err);
      
    }
    
  }

  return (
    <div className="h-screen bg-gray-800 text-white w-40 hover:w-64 transition-all duration-300 flex flex-col justify-between sticky ">
      <div>
        {menu.map((item, index) => (
        <NavLink to={item.path}>
        <div
          key={index}
          className="flex items-center gap-4 p-3 rounded-md pl-3 hover:bg-green-600 cursor-pointer transition-colors "
        >
          {item.icon}
          <div className='ml-7'>{item.label}</div>
         
        </div>
        </NavLink>
        
        
      ))}
      </div>
      <div onClick={handleLogout} className='pb-7'>
        <LogOut size={28}  className='inline'/>
        <span>Log Out</span>
      </div>
    </div>
  );
}

export default AdminSidebar;
