import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { sliders } from '../assets'

const Slider = () => {

    const [current, setCurrent] = useState(0)
    const [stop, setStop] = useState(false)

    const progressRef = useRef(null)
    const animationRef = useRef(null)
    const sliderRef = useRef(null)

    // Progress Bar Animation
    useEffect(() => {

        if (!progressRef.current) return

        gsap.set(progressRef.current, {
            width: "0%"
        })

        animationRef.current = gsap.to(progressRef.current, {

            width: "100%",
            duration: 6,
            ease: "linear",

            onComplete: () => {

                setCurrent((prev) =>
                    prev === sliders.length - 1
                        ? 0
                        : prev + 1
                )

            }

        })

        return () => {

            if (animationRef.current) {
                animationRef.current.kill()
            }

        }

    }, [current])



    // Pause / Resume
    useEffect(() => {

        if (!animationRef.current) return

        if (stop) {

            animationRef.current.pause()

        } else {

            animationRef.current.resume()

        }

    }, [stop])



    // Slider Movement
    useEffect(() => {

        gsap.to(sliderRef.current, {

            x: `-${current * 100}vw`,
            duration: 1.2,
            ease: "power3.inOut"

        })

    }, [current])

    


    return (

        <div className='overflow-hidden w-screen h-screen relative bg-primary'>

            {/* SLIDER CONTAINER */}
            <div
                ref={sliderRef}
                className='flex w-full h-full '
            >

                {sliders.map((item,index) => (

                    <section
                        key={item.id}
                        className='min-w-full h-screen relative'
                    >

                        {/* HERO IMAGE */}
                        <img
                            src={item.HeroImg}
                            className='w-full h-160 object-cover object-top -z-10'
                            alt=""
                        />



                        {/* DARK BLUR */}
                        <div className='absolute w-screen h-120 top-90 bg-black opacity-70 blur-[60px] left-10 bottom-20 z-none pointer-events-none'></div>



                        {/* CONTENT */}
                        <div className='absolute bottom-8 left-20 z-50 flex'>

                            <img
                                src={item.logo}
                                alt=""
                                className={` ${index === 2 ? 'w-80 h-50': 'w-80'} ${index === 1 ? 'w-30 h-55 ': 'w-80'}`}
                            />



                            <div className={`flex flex-col gap-6  ${index === 1 ? 'ml-20': 'ml-0'} ${index === 2 ? 'ml-23 mt-1': ' mt-7'} `}>

                                <div className={``}>

                                    <p className='text-white text-xl font-semibold'>
                                        {item.title}
                                    </p>

                                    <p className='text-white text-[35px] leading-9 font-bold'>
                                        {item.MainTitle}
                                        <br />
                                        {item.RemainTitle}
                                    </p>

                                </div>



                                <div className='flex gap-5 z-50'>

                                    <button className='flex gap-1.5 px-7 py-3  rounded-full cursor-pointer bg-amber-200   hover:bg-amber-300/85 text-black text-lg font-semibold transition-all duration-100'>

                                        <i className='ri-play-large-fill  '></i>

                                        
                                           Watch Trailer
                                       

                                    </button>



                                    <button className='px-6 py-3 rounded-full cursor-pointer  text-white border  border-white text-lg bg-white/10 hover:bg-gray-600 transition-all  duration-200'>

                                        Learn More

                                    </button>

                                </div>

                            </div>

                        </div>

                    </section>

                ))}

            </div>



            {/* CONTROLS */}
            <div className='absolute bottom-21 left-20 z-50 flex gap-4  items-center ml-225'>

                {/* PAUSE BUTTON */}
                <span className='flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-500 cursor-pointer transition-all duration-200 '>

                    <i
                        onClick={() => setStop(!stop)}
                        className={`${stop
                                ? 'ri-play-large-fill'
                                : 'ri-pause-line'
                            } text-white text-lg`}
                    ></i>

                </span>



                {/* DOTS / BAR */}
                <div className='flex gap-3 items-center'>

                    {sliders.map((slide, index) => (

                        current === index ? (

                            <div
                                key={slide.id}
                                className='w-20 h-[8px] bg-white/30 rounded-full overflow-hidden'
                            >

                                <div
                                    ref={progressRef}
                                    className='h-full bg-white w-0'
                                ></div>

                            </div>

                        ) : (

                            <span onClick={()=>setCurrent(index)}
                                key={slide.id}
                                className='w-2.5 h-2.5 rounded-full bg-white inline-block cursor-pointer transition-all duration-100'
                            ></span>

                        )

                    ))}

                </div>

            </div>

        </div>

    )

}

export default Slider