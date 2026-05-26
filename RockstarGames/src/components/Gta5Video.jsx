import React, { useState } from 'react'
import { assets } from '../assets'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/src/ScrollTrigger'
import { useRef } from 'react'
import { Gta5cards } from '../assets'



gsap.registerPlugin(ScrollTrigger)

const Gta5Video = () => {
    const videoRef = useRef(null)
    const [playing, setPlaying] = useState(true)

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: '.video',
            start: 'top 80%',
            end: 'bottom 0%',
            scrub: true,
            onEnter: () => {
                videoRef.current?.play()
            },

            onEnterBack: () => {
                videoRef.current?.play()
            },
            onLeaveBack: () => {
                videoRef.current?.pause()
            }
        })
        ScrollTrigger.create({
            trigger: ".video",
            start: "top top",
            end: "+=300",
            pin: true,
            scrub: 1,

        });

        // Next section covers video
        gsap.fromTo(".next-section",{
            marginTop: "0px",
        },  {
            marginTop: "-150vh",
            ease: "none",
            scrollTrigger: {
               
                trigger: ".video",
                 start: "top top",
                end: "+=300",
                scrub: 2,
                
            },
        });

    })


    const handlePlayPause = () => {
        if (playing) {
            videoRef.current.pause()
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
    }
    return (
        <section className='overflow-hidden' >
            <div className='relative  h-screen   video overflow-hidden'>
                <div className='relative'>
                    <video ref={videoRef} src={assets.v1} className='Play flex items-center justify-center w-full h-full transition-all duration-300 -z-10 ' muted autoPlay loop playsInline ></video>
                    <div onClick={handlePlayPause} className={`absolute w-9 h-9 rounded-full ${playing ? 'px-[8px]' : 'px-[9px]'} py-1   bg-white/70 inline-block z-50 left-300 -mt-160 cursor-pointer `}><i className={`${playing ? 'ri-pause-fill text-black text-xl z-50' : 'ri-play-fill text-black text-xl z-50'}`}></i></div>
                </div>

                {/* another section */}

            </div>
            <div className='relative next-section  w-full h-210 bg-primary overflow'>
                <div className='absolute  bg-gradient-to-b from-black to-black -mt-50 z-none  left-0 inset-x-0 w-full h-100  blur-[100px] opacity-95    '></div>
                <div className='relative flex flex-col ml-30 gap-4 z-50 '>
                    <img src={assets.gtaon_logo} className='absolute w-45 -mt-35 ' alt="" />
                    <div className=' text-lg font-inter font-medium mt-17 z-50 '><span className='text-white/85'>Games /</span>
                        <span className='text-white  '> Grand Theft Auto Online</span>
                    </div>

                    <p className='text-white/95 text-xl font-inter font-medium tracking-tight'>Explore GTA Online, a dynamic world for up to 30 players, featuring <br />all updates and content since launch, playable solo or with friends</p>
                </div>
                <div className='relative mt-7 flex gap-2 items-center ml-30 z-10'>
                    <div className='flex gap-3 items-center'>
                        <button className='px-6 py-3.5 rounded-full bg-white/96 flex items-center justify-center  cursor-pointer shrink-0 hover:bg-amber-100 transition-all duration-300'><i className='ri-play-mini-fill text-black/ text-2xl '></i> <span className='text-black/94 text-lg font-inter font-semibold tracking-tight'>Watch Trailer</span></button>
                        <button className='px-4 py-3.5 rounded-full border border-white/90 bg-white/5 text-white shrink-0 text-lg font-inter font-bold tracking-tight hover:bg-gray-500 cursor-pointer transition-all duration-200'>Learn More</button>
                    </div>
                    <img src={assets.ps5_logo} className=' w-27 invert shrink-0 ml-3' alt="" />
                    <img src={assets.ps4_logo} className=' w-27 invert shrink-0' alt="" />
                    <img src={assets.xbox_s_logo} className=' w-27 invert shrink-0' alt="" />
                    <img src={assets.xbox_logo} className=' w-27 invert shrink-0' alt="" />
                    <img src={assets.pc_logo} className=' w-8.5 invert shrink-0' alt="" />
                </div>
                <div className='relative px-30 py-10 z-50'>
                    <p className='text-3xl text-white/95 font-inter font-semibold  '>Jump Into GTA Online</p>
                    <div className='flex gap-5'>
                        {
                            Gta5cards.map((item, index) => (

                                <div >
                                    <div key={index} className=' relative flex flex-col gap-5 w-65  hover:scale-103 cursor-pointer h-90    rounded-xl  mt-7 transition-all duration-300'>
                                        <img src={item.mainImg} className='w-full h-full rounded-xl  ' alt="" />
                                        <div className='flex flex-col items-center justify-center gap-6 py-2'>
                                            <img src={item.logo} className={`z-10    -mt-75 ${index === 2 ? 'w-23 ' : 'invert w-25'} `} alt="" />
                                            <span className='absolute bg-primary w-full bottom-10 h-40 blur-[70px] opacity-70'></span>
                                            <div className=' flex flex-col items-center gap-4 flex flex-col items-center z-10'>
                                                <p className={`text-white text-center leading-5.5  font-inter font-medium ${index === 3 ? 'mt-15' : ''}`}>{item.title} <br /> {item.RemTitle} <br /> {item.RemText} </p>
                                                <button className={` tracking-tighter font-semibold font-inter px-4 py-2.5  rounded-full   ${index === 1 || index === 3 ? 'bg-amber-200 text-black hover:bg-amber-300' : 'bg-amber-500 text-black hover:bg-amber-400'}`}>{item.Btext}</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Gta5Video
