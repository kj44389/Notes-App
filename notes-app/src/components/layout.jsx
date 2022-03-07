import React from 'react'

const Layout = ({ children }) => {
     return (
       <>
               <nav className='flex items-center w-full h-12 p-3 shadow-sm text-left bg-gray-300 text-gray-500 font-medium text-base'><h1>Notes App </h1></nav>
               <div className='flex w-full h-screen flex-col items-center bg-gray-100 space-y-3'>{children}</div>
          </>
  )
}

export default Layout