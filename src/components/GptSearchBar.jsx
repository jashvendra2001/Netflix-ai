import React from 'react'
import { LanguageConstant } from '../utility/LanguageConstant'
import { useSelector } from 'react-redux'
const GptSearchBar = () => {

  const language=useSelector((state)=>state.supported.lang)
   
  return (
    <div className=' flex justify-center '>
         <div className='absolute -z-10'>
        <img className='z-1 h-[100vh] md:h-auto   object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/4d7bb476-6d8b-4c49-a8c3-7739fddd135c/deecf71d-7a47-4739-9e1a-31b6b0d55be7/IN-en-20240429-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="" />
      </div>
        <form action="" onSubmit={(e)=>e.preventDefault()}>
            <div className=" mt-20 bg-black p-12 px-20">
            <input type="text  "  className='p-3 px-5 text-black' placeholder={LanguageConstant[language]?.gptSearchHolder}/>
            <button className='text-white bg-[hsl(0,67%,46%)] p-3 border rounded ' >{LanguageConstant[language]?.search}</button>
            </div>
            
        </form>
    </div>
  )
}

export default GptSearchBar