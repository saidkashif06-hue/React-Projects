import React from 'react'
import { cards } from '../assets'

const GameDropMenu = ({setShowIcon}) => {
  return (
    <div className='absolute w-screen h-[420px] mt-16 left-0 bg-primary  '>
      
   <div className='flex flex-col py-10 px-18 gap-4'>
     <div className='flex justify-between '>
      <p className='text-white font-semibold font-inter text-[25px] tracking-wide '>Featured Games</p>
     <i onClick={()=>setShowIcon(false)} className={`ri-close-fill text-white text-xl cursor-pointer pr-2`}></i>
     </div>
    <div className='flex justify-between  '>
   { cards.map((card,index)=>(


    <img key={index} className='w-55 h-70 rounded-lg hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer ' src={card} alt="" />


   ))}
   </div>
   </div>



    </div>
  )
}

export default GameDropMenu
