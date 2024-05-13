import React, { useEffect } from 'react'
import Header from './Header'
import useMoviesData from './useMoviesData'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'


const Browser = () => {

  console.log(useMoviesData())
  
  return (
    <div>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
      <SecondaryContainer/>

      <SecondaryContainer/>

      

    
    </div>
  )
}

export default Browser