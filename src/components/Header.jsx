import React from 'react'
import logo from "../img/Netflix_Logo_PMS.png"
const Header = () => {
  return (
    <div className='absolute bg-gradient-to-b from-black z-[100]'>
        <img src={logo} className='w-[120px] ' alt="logo" title='netflix-logo' />
    </div>
  )
}

export default Header