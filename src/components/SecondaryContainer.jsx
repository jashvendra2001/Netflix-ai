import React from 'react';
import Card from './Card';
import { useSelector } from 'react-redux';
import MoviesList from './MoviesList';

const SecondaryContainer = () => {
  // Fetching the first movie from Redux store
 

  return (
   <>
   <MoviesList/>
   <MoviesList/>

   <MoviesList/>

   </>
   
  );
};

export default SecondaryContainer;
