import React from 'react'
import { assets, gtaCards } from '../assets'

const Gta6 = () => {
    return (
        <section className=' relative  flex w-full h-195  bg-primary'>
            <div className='w-1/2 flex flex-col px-10 gap-5    '>
                <div className='flex justify-center py-5 items-center w-135 h-1/2 ml-8  '>
                    <img src={assets.gta6_logo} className='w-65 z-10' alt="" />
                </div>
                <div className='flex flex-col justify-center  px-11 gap-11 bg-[#202020] w-155 h-70 rounded-b-lg  ml-10  '>
                    <div className='flex flex-col gap-3 -mt-5 '>
                        <p className='text-[19.5px] text-white/90  font-semibold '>Grand Theft Auto VI</p>
                        <p className='text-[38px] text-white/90 leading-10.5  font-semibold tracking-tighter'>Grand Theft Auto VI is Now Set <br /> to Launch Novermber 19,2026</p>
                    </div>
                    <p className='text-md font-inter font-light text-gray-400 '>November 6,2025</p>
                </div>
            </div>
            <div className='w-1/2  items-start  flex flex-col gap-3  ml-7 py-3 '>
                {
                    gtaCards.map((item, index) => (
                        <div key={index} className={`flex items-start  gap-6 w-135 h-40 ml-3 hover:rounded-xl hover:bg-[#202020] cursor-pointer transition-all duration-200 `}>
                            <div className='flex items-start overflow-hidden ' >
                                <img src={item.mainImg} className={`w-65  rounded-lg hover:scale-103 cursor-pointer transition-all duration-300 ${index === 3 ? 'h-40':''} ${index === 0 ? 'h-40':''}`} alt="" />
                            </div>
                            <div className='flex flex-col gap-6 py-2 '>
                                <div className='flex flex-col gap-2'>
                                    <p className='text-white/95 font-inter font-semibold text-[14px] '>{item.title} </p>
                                    <p className='text-white font-inter font-semibold text-xl leading-6'>{item.Maintitle}<br />{item.secTitle} <br />{item.thirdTitle}</p>
                                </div>
                                <p className='text-gray-400 font-inter font-light text-[14px] tracking-wider '>{item.data}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Gta6
