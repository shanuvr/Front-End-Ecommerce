import React, { useEffect, useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { Search,ShoppingCartIcon,Tally3,X,UserRoundPen,PowerOff ,LogOutIcon } from "lucide-react";
import api from "../api/axios";

function UserNavbar() {
  const [isOpen, setIsOpen] = useState(false);
    const [session,setSession]=useState(null)
  useEffect(()=>{
      
      sessioncheck()
  },[])
  async function sessioncheck() {
    console.log("inside session check");
    const session1 = await api.get('/sessioncheck')
      console.log(session1.data);
      setSession(session1.data)
      console.log("after session");
      
  }

  return (
    <nav className="bg-gray-200 p-4 sticky top-0">
      <div className="flex justify-between items-center">
      
        <div className="font-bold">Logo</div>

       <form className="md:flex items-center bg-gray-100 rounded-md px-2 py-1">
              <input
                type="text"
                placeholder="Search products...."
                className="bg-transparent outline-none text-sm px-2 md:w-48 w-28"
              />
              <button aria-label="Search" type="submit" className="p-1"><Search size={16} /></button>
            </form>


        <ul className="hidden md:flex space-x-4">
          <li> <NavLink to="/">Home</NavLink> </li>
         
           
            <li>  <NavLink to="/profile"><UserRoundPen /></NavLink></li>
            <NavLink to="/cart" className="relative p-2 rounded-md hover:bg-gray-100">
              <ShoppingCartIcon size={20} /></NavLink>
         {
  session
    ? session.loggedin
      ? <p>{session.user.name}</p>
      : <li><NavLink to="/login">Login</NavLink></li>
    : null
}
             
             
            <li>
  <button onClick={async ()=>{
    console.log("logout clicked");
    await api.get("/logout");  
    localStorage.removeItem("user");
    setSession({ loggedin:false, user:null }); 
  }}>
    <LogOutIcon/> 
  </button>
</li>
              
            
        </ul>
       
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X/> :<Tally3/> }
        </button>
      </div>

     {isOpen && (
  <ul className="md:hidden mt-2 space-y-5">
    <li><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/profile"> <UserRoundPen/> </NavLink></li>
    <li><NavLink to="/cart">Cart</NavLink></li>
    <li><NavLink to="/login">Login</NavLink></li>
  </ul>
)}
    </nav>
  );
}

export default UserNavbar;
