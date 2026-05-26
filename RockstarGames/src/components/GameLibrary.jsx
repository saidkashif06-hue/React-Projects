import React from 'react'
import { cards11, cards12 } from '../assets'

const GameLibrary = () => {
  return (
    <section className='  w-full h-180 bg-black overflow-hidden '>
      <div className=' shrink-0 flex gap-3  marquee '>
        {
          cards11.map((item, index) => (
            <div key={index} className='w-65 border border-white h-75  shrink-0'>
              <img src={item.image} className='w-full h-full' alt="" />
            </div>

          ))
        }
      </div>
      <div className=' shrink-0 flex gap-3  marquee-animate py-2.5 '>
        {
          cards12.map((item, index) => (
            <div key={index} className='w-65 border border-white h-75  shrink-0'>
              <img src={item.image1} className='w-full h-full' alt="" />
            </div>

          ))
        }
        <div className='absolute bg-black blur-[160px] -mt-20 w-full h-150 '></div>

      </div>
      <div className='absolute bg-black blur-[170px] w-150 -ml-100  -mt-170   h-full z-50 '></div>

      <div className='relative z-50 flex flex-col gap-8 -mt-55 ml-25'>
        <div className='flex flex-col  '>
          <p className='text-white text-[45px] font-inter font-bold '>Game Library</p>
          <p className='text-white/95 text-xl font-inter font-semibold'>All RockStar Games titles, from Upcoming <br /> release like Grand Theft Auto VI to the classics.</p>
        </div>
        <button className='self-start px-6 py-3 rounded-full bg-white/90 hover:bg-white cursor-pointer text-black text-center text-lg font-inter font-semibold tracking-tight'>View All <i className='ri-arrow-right-long-line text-lg text-medium '></i></button>
      </div>
    </section>
  )
}

export default GameLibrary
