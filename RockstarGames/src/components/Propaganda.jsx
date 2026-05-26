import React from 'react'
import { assets } from '../assets'

const Propaganda = () => {
    return (
        <section className='w-full h-140 bg-primary'>
            <div>
                <div className='flex  items-center justify-between px-45'>
                    <div>
                        <p className='text-white text-[67px] font-inter font-bold tracking-tight leading-16 pb-8 '>Rockstar <br /> Propaganda</p>
                    </div>
                    <div className='flex flex-col gap-4'>
                       <div className='flex flex-col gap-1.5'>
                         <p className='text-3xl font-inter font-semibold text-white tracking-tight'>Subscrie to the NewsLetter</p>
                        <p className='text-white/90 text-lg font-inter font-semibold '>Sign up for our email newsletter to get the latest game <br /> announcement, updates on special events and offers, <br />and more from Rockstar Games and our affiliates.</p>
                       </div>
                        <button className='px-5 py-3.5 self-start rounded-full bg-white/90 hover:bg-white cursor-pointer text-md text-black font-inter font-medium'>
                            Subscribe Now
                        </button>
                    </div>
                </div>
                <div className='flex items-center justify-center py-15'>
                    <img src={assets.propa} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Propaganda
