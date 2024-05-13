import React, { useEffect,useState } from 'react'
import { tailerApi  } from '../utility/StaticData'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailer } from '../utility/moviesSlice'


const VideoBackGround = ({id}) => {
const [filtertailer,setFilterTrailer]=useState([])

const dispatch=useDispatch();
const trailer = useSelector((state) => {
  const trailers = state.movies?.addTrailer;
  return trailers && trailers.length > 0 ? trailers[0].key : null;
});

 
 

  const trailerApi= async ()=>{

    const dataTrailer= await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, tailerApi )
  const Dataresponse= await dataTrailer.json();
  console.log(Dataresponse)


  const filterDataTrailer=Dataresponse?.results?.filter((items)=>items?.type==="Trailer");
  



  
  // console.log(filterDataTrailer[0].key)

//we can use here a useState either redux hook

  // setFilterTrailer(filterDataTrailer)
  dispatch(addTrailer(filterDataTrailer))
  


  }
  useEffect(()=>{
    trailerApi();

  },[])

  



  
  return (
    <div className='w-screen h-auto'>
      {/* <iframe  className='w-screen relative  aspect-video'  src={`https://www.youtube.com/embed/${trailer}?si=UrQK_HFquNx6ImY4&amp;start=12&autoplay=1&mute=1`} title="YouTube video player" frameborder="0" allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
      <iframe  className='w-full w-100  relative aspect-video'   src={`https://www.youtube.com/embed/${trailer}?si=UrQK_HFquNx6ImY4&amp;start=12&autoplay=1&mute=1&autohide=1&showinfo=0&controls=0`}title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share " referrerpolicy="strict-origin-when-cross-origin" allowFullScreen loop></iframe>
    </div>
  )
}

export default VideoBackGround