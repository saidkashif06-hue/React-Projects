import React, { useState } from 'react'
import { useEffect } from 'react'

const GetSearch = ({search,setSearch}) => {
    
   const changebg = (e) => {
    
    e.stopPropagation()

  document
    .querySelectorAll('.nav-item')
    .forEach(item => {

      item.classList.remove(
        'bg-pink-100',
        'text-black'
      )

      item.classList.add('text-white')

    })

  e.currentTarget.classList.remove('text-white')

  e.currentTarget.classList.add(
    'bg-pink-100',
    'text-black'
  )
}
useEffect(() => {

  document.addEventListener('click', changebg)

  return () => {
    document.removeEventListener('click', changebg)
  }

}, [])
  return (
    <div className='absolute w-screen left-0 h-30 mt-16 flex justify-between items-center px-15  bg-black'>
      <div className='flex items-center '>
        <i className='ri-search-line text-xl text-white cursor-pointer'></i>
        <input type="text" placeholder='Search Rockstar Games...' className='w-100 h-8 ml-2 outline-none pl-4  rounded-full text-white text-2xl font-poppins font-bold placeholder:text-gray-100' />
      </div>
     <div className='flex gap-10 items-center'>
        <ul className='flex gap-3'>
        <li onClick={changebg} className={`nav-item px-4.5 py-2 rounded-full bg-gray-600 text-white cursor-pointer text-lg font-inter font-medium `}>Games</li>
        <li onClick={changebg} className={`nav-item  px-4.5 py-2 rounded-full bg-gray-600 text-white cursor-pointer text-lg font-inter font-medium`}>Posts</li>
        <li onClick={changebg} className={`nav-item  px-4.5 py-2 rounded-full bg-gray-600 text-white cursor-pointer text-lg font-inter font-medium`}>Videos</li>
        <li onClick={changebg} className={`nav-item  px-4.5 py-2 rounded-full bg-gray-600 text-white cursor-pointer text-lg font-inter font-medium`}>Community <i className='ri-arrow-down-s-line text-lg -ml-0.5'></i></li>
      </ul>
      <i onClick={()=>{setSearch(false)}} className='ri-close-fill text-xl cursor-pointer text-white'></i>
     </div>
    </div>
  )
}

export default GetSearch
