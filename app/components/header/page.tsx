import React from 'react'
import Link from 'next/link'

const Header = () => {
  return ( 
    <nav className='bg-red-800 shadow-lg'>
      <div className='container max-auto'>
        <div className='sm:flex justify-around'>
          <a href="#" className='text-white text-3xl font-bold p-3 '> Muhammad's Assighment</a>
          <ul className='text-gray-400 sm:self-center text-xl border-t sm:border-none'>

            <li className='sm:inline-block'>
              <a href="#" className='p-3 hover:text-white'>About</a>
            </li>

            <li className='sm:inline-block'>
              <a href="#" className='p-3 hover:text-white'>Portfolio</a>
            </li>

            <li className='sm:inline-block'>
              <a href="#" className='p-3 hover:text-white'>Contact</a>
            </li>

            <li className='sm:inline-block'>
              <a href="#" className='p-3 hover:text-white'>Services</a>
            </li>
          </ul>

        </div>

      </div>
    </nav>


  )
   

    
}

export default Header

