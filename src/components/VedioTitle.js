import React from 'react'

const VedioTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-vedio absolute text-white bg-gradiant-to-r pt-[15%] px-24 from-black'>
      <h1 className='text-5xl font-bold w-1/2'>{title}</h1>
      <p className='py-6 text-lg w-2/3' >{overview}</p>
      <div className="">
        <button className="bg-white text-black p-4 w-15 px-12 text-xl hover:bg-opacity-80 rounded-lg">Play</button>
        <button className="mx-2 bg-gray-500 text-white w-30 p-4 px-12 text-xl bg-opacity-50 rounded-lg">More info</button>
      </div>

    </div>
  )
}

export default VedioTitle