import React from 'react'
import logo from "../img/Netflix_Logo_PMS.png"
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ToggleGptContainer } from '../utility/GptSlice';
import { SUPPORTED_LANG } from '../utility/StaticData';
import { SupportedLangUpdate } from '../utility/supportedLangSlice';
import { LanguageConstant } from '../utility/LanguageConstant';

const Header = () => {
  const username=  useSelector((state)=>state?.user?.displayName)
  // const logoIn =   useSelector((state)=>{state?.user?.uid})




  const ToggleButtonHeader= useSelector((state)=>state?.GPT?.GptButton)
  const dispatch=useDispatch();
  
const handleToggleButton=()=>{
  dispatch(ToggleGptContainer())
}

const handleSupportedData=(e)=>{
  dispatch(SupportedLangUpdate(e.target.value))

}



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
    {  ToggleButtonHeader  &&  <select className='p-2' onChange={handleSupportedData}>
  {
    SUPPORTED_LANG.map((item)=>{
   
      return(     
         <option key={item.identifier} value={item.identifier}>{item.name}</option>
    )


    })
  }

</select>} 
     
  
          <button className='p-2 bg-gray-500 border-rounded' onClick={handleToggleButton}>ChatGPT</button>
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