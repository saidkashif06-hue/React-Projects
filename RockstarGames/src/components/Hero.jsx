import React, { useEffect, useState } from 'react'
import { assets } from '../assets'
import { useRef } from 'react'
import { sliders } from '../assets'
import gsap from 'gsap'
import Slide from './Slide'


const Hero = () => {

   return (

      <div className='flex'>

         {sliders.map((item,index)=>(
            

            <section
               key={item.id}
            >

               <Slide />

            </section>

         ))}

      </div>

   )

}

export default Hero
