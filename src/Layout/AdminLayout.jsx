import AdminSidebar from '../Components/AdminSidebar'
import React from 'react'

export default function ({ children}) {
  return (
    <div className='flex'>
        <AdminSidebar/>
        <main className='flex-1 p-4 bg-gray-50 min-h-screen'>
            {children}
        </main>
    </div>
  )
}
