import React from 'react'

const Card = ({poster}) => {
    console.log(poster)
  return (
    <div className='w-48 p-1'>
        <img className=' w-full'  src={`https://image.tmdb.org/t/p/w500/${poster.poster_path}`} alt="" />

    </div>
  )
}

export default Card