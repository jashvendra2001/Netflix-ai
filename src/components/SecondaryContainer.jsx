import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  // Fetching the first movie from Redux store
  const addMovies = useSelector((state) => state.movies?.addMovies);

  // Check if addMovies is not null or undefined and has at least one movie
  const firstMoviePoster = addMovies && addMovies.length > 0 ? addMovies : null;

  console.log(firstMoviePoster);

  return (
    <div className="">
        <p>video</p>
       <div className='flex gap-1  p-2 overflow-x-scroll' >
    
      {firstMoviePoster && firstMoviePoster.map((item)=>{
        return(

          <>
          
          <div className=" ">
          <Card poster={item} />
          </div>
          
          
          </>
          
          
          
        )

      })}
    </div>

    </div>
   
  );
};

export default SecondaryContainer;
