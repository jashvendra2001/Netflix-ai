import React, { useEffect } from 'react'
import Header from './Header'
import useMoviesData from './useMoviesData'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import SearchGPT from './SearchGPT'
import { useSelector } from 'react-redux'


const Browser = () => {
  const toggleButton = useSelector((state) => state?.GPT?.GptButton);
   

  console.log(toggleButton)

  console.log(useMoviesData())
  
  return (
    <div className=''>
      <Header/>
      
      
      {
      toggleButton ? <SearchGPT/>: <>
      <MainContainer/>
      <SecondaryContainer/>
      </>}
     
    
      
      </div>
  )
}

export default Browser