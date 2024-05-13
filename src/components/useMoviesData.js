import React, { useEffect } from 'react'
import { options } from '../utility/StaticData'
import { useDispatch } from 'react-redux'
import { addMovies } from '../utility/moviesSlice'



const useMoviesData = () => {
   
    const dispatch=useDispatch();

    const newMoviesData= async()=>{

        

        const moviesdata= await fetch('https://api.themoviedb.org/3/movie/now_playing', options)
        const moviesResponse=await moviesdata.json();

       console.log(moviesResponse)
       dispatch(addMovies(moviesResponse.results))
       

    }

    useEffect(()=>{

        newMoviesData();

    },[])

  
  


  
}



export default useMoviesData