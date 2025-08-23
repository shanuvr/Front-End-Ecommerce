import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Search,
  ShoppingCartIcon,
  Tally3,
  X,
  UserRoundPen,
  LogOutIcon,
} from "lucide-react";
import api from "../api/axios";

function UserNavbar() {
  const navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false);
  const [session, setSession] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
const [results, setResults] = useState([]);

  useEffect(() => {
    sessionCheck();
  }, []);

  async function sessionCheck() {
    try {
      const res = await api.get("/sessioncheck");
      setSession(res.data);
    } catch (err) {
      console.error("Session check failed:", err);
      setSession({ loggedin: false, user: null });
    }
  }

  async function handleLogout() {
    try {
      await api.get("/logout");
      localStorage.removeItem("user");
      setSession({ loggedin: false, user: null });
    } catch (err) {
      console.error("Logout failed:", err);
    }
  }
  async function handleSearch() {
    console.log("search clicked");
    console.log(searchTerm);
    const result =await api.get(`/search/${searchTerm}`)
    console.log(result.data);
    setResults(result.data)
    
  }

  return (
    <nav className="bg-gray-200 p-4 sticky top-0 z-50">
      <div className="flex justify-between items-center">
      
        <div className="font-bold">Logo</div>

        
        <div className="hidden md:flex items-center bg-gray-100 rounded-md px-2 py-1">
          <input
          onChange={(e)=>{setSearchTerm(e.target.value)}}
            type="text"
            placeholder="Search products..."
            className="bg-transparent outline-none text-sm px-2 md:w-48 w-28"
          />
          <button onClick={handleSearch}  aria-label="Search"  className="p-1">
            <Search size={16} />
          </button>
        </div>

       
        <ul className="hidden md:flex space-x-4 items-center">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          
          <li>
            <NavLink
              to="/cart"
              className="relative p-2 rounded-md hover:bg-gray-100"
            >
              <ShoppingCartIcon size={20} />
            </NavLink>
          </li>

   
          {session ? (
            session.loggedin ? (
              <>
                <li className="font-medium">{session.user?.name}</li>
                <li>
                  <button
                    className="bg-gray-300 px-3 py-2 rounded-full hover:scale-105 transition-all flex items-center gap-1"
                    onClick={handleLogout}
                  >
                    <LogOutIcon size={16} /> Logout
                  </button>
                </li>
                <li>
            <NavLink to="/profile">
              <UserRoundPen />
            </NavLink>
          </li>
              </>
            ) : (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )
          ) : null}
        </ul>

       
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Tally3 />}
        </button>
      </div>

     
      {isOpen && (
        <ul className="md:hidden mt-2 space-y-3 bg-gray-100 p-3 rounded-lg">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/profile">
              <UserRoundPen /> Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart">Cart</NavLink>
          </li>
          {session ? (
            session.loggedin ? (
              <>
                <li className="font-medium">{session.user?.name}</li>
                <li>
                  <button
                    className="bg-gray-300 px-3 py-2 rounded-full hover:scale-105 transition-all flex items-center gap-1"
                    onClick={handleLogout}
                  >
                    <LogOutIcon size={16} /> Logout
                  </button>
                </li>
              </>
            ) : (
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            )
          ) : null}
        </ul>
      )}
     {results.length > 0 && (
  <div className="bg-white shadow-md rounded-md mt-">
    
   
    <div className="flex justify-end">
      <button 
        onClick={() => setResults([])} 
        className="text-gray-500 hover:text-black"
      >
        <X size={18} />
      </button>
    </div>

    {results.length > 0 && (
  <div className="bg-white shadow-md rounded-md mt-2 p-3 absolute left-1/2 transform -translate-x-1/2 w-96 max-h-80 overflow-y-auto z-50">
    <div className="flex justify-end mb-2">
      <button 
        onClick={() => setResults([])} 
        className="text-gray-500 hover:text-black"
      >
        <X size={18} />
      </button>
    </div>

    {results.map((item) => (
      <div 
        onClick={()=>{navigate(`/product/${item._id}`)}}
        key={item._id} 
        className="p-3 border-b last:border-none hover:bg-gray-100 cursor-pointer"
      >
        <img src={`http://localhost:3000/${item.productImage}`} alt="" />
        <p className="font-semibold text-gray-900">{item.productName}</p>
        <p className="text-sm font-bold text-green-700">₹{item.productPrice}</p>
      </div>
    ))}
  </div>
)}

  </div>
)}

    </nav>
  );
}

export default UserNavbar;
