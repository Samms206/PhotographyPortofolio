import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='bg-pink-200 fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        <Link to={"/"}>
          <img src='../logo.svg' alt='logo'/>
        </Link>

        <nav className='hidden lg:flex'>
          <Link to={'/'} className='text-[#696c6d] hover:text-primary transition'/>
        </nav>
      </div>
    </header>
  )
}

export default Header

