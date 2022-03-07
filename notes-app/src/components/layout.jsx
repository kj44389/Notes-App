import React from 'react'

const Layout = ({ children }) => {
     return (
       <>
               <nav className='flex items-center w-full h-12 p-3 shadow-sm text-left bg-gray-300 text-gray-500 font-medium text-base'> Notes App </nav>
               <div className='flex w-full h-full'>{children}</div>
          </>
  )
}

export default Layout