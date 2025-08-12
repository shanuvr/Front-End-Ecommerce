import React from 'react'
import { Navigate } from 'react-router-dom'

function Protected({ children }) {
 
    const pro = localStorage.getItem("admin")
  return (
    pro? children:<Navigate to="/admin/login"/>
  )
}

export default Protected