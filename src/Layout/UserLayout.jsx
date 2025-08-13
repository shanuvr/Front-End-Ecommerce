import React from 'react'
import UserNavbar from '../Components/UserNavbar'

function UserLayout({children}) {
  return (
    <div className='flex flex-col'>
            <UserNavbar/>
            <main className='flex-1 p-4 bg-gray-50 min-h-screen overflow-x-hidden'>
                {children}
            </main>
        </div>
  )
}

export default UserLayout