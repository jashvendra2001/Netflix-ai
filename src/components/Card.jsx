import React from 'react'

const Card = ({poster}) => {
    console.log(poster)
  return (
    <div className=' cursor-pointer w-48 p-1 box-shadow hover:shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]'>
        <img className=' w-full'  src={`https://image.tmdb.org/t/p/w500/${poster.poster_path}`} alt="" />

    </div>
  )
}

export default Card