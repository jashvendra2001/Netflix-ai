import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className=' px-12 absolute z-20 md:pt-40 top-20 sm:top-10 top-2 sm:pt-1 ' > 
        <h1 className='text-6xl  font-bold text-white hidden lg:block'>{title}</h1>
        <p className='py-6 text-lg w-3/4 md:w-2/4 sm:w-2/4 text-white hidden lg:block'>{overview}</p>

        <div className='flex hidden lg:block '>
            <button className='bg-gray-600 text-lg  text-white p-4 px-10 bg-opacity-50 rounded-lg'>▶️Play</button>
            <button  className=' mx-2 bg-gray-600 text-lg  text-white p-4 px-10 bg-opacity-50 rounded-lg'>more Info</button>
        </div>



    </div>
  )
}

export default VideoTitle