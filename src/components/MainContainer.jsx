import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackGround from './VideoBackGround';

const MainContainer = () => {
    const moviesData=useSelector((state)=>state?.movies?.addMovies);
   
    if(!moviesData) {
        return
    }

          const movieBg = moviesData[12]
            //  console.log(movieBg)
   

  return (
    <div>
<VideoTitle  title={movieBg.title} overview={movieBg.overview}/>
<VideoBackGround id={movieBg.id} />

    </div>
  )
}

export default MainContainer