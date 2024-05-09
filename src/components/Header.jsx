import React from 'react'
import logo from "../img/Netflix_Logo_PMS.png"
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const username=  useSelector((state)=>state?.user?.displayName)
  // const logoIn =   useSelector((state)=>{state?.user?.uid})


  const navigate=useNavigate()
  const onLogout=()=>{

    const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  alert("log out successfully")
  navigate("/")

}).catch((error) => {
  // An error happened.
});
    
  }
  return (
    <div className='absolute bg-gradient-to-b from-black z-[100] flex  w-[100%] justify-between p-2'>
        <img src={logo} className='w-[120px]  cursor-pointer' alt="logo" title='netflix-logo' />
        <div className="parents">
        {username  && <div className='flex  justify-center items-center'>
          <span>{username}</span>
         &nbsp;
          <img src="https://i.pinimg.com/564x/5b/50/e7/5b50e75d07c726d36f397f6359098f58.jpg" className='w-12  cursor-pointer ' alt="logo" title='netflix-logo' onClick={onLogout} />

          </div> }
 
        </div>

    </div>
  )
}

export default Header