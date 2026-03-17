"use client"

import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

function CarAnimation() {

  const carRef = useRef(null)

  useEffect(() => {

    gsap.to(carRef.current, {
      x: 800, // distance car travels
      ease: "none",
      scrollTrigger: {
        trigger: carRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true
      }
    })

  }, [])

  return (
    <div className='border-b-4 border-t-4 h-10 md:h-20 mt-15 border-gray-300 flex relative items-center'>

      <div className='flex overflow-hidden'>
        <Image className='opacity-50' src={'/images/Border 1.png'} width={500} height={900} alt='Road'/>
        <Image className='hidden md:block opacity-50' src={'/images/Border 1.png'} width={500} height={900} alt='Road'/>
        <Image className='hidden md:block opacity-50' src={'/images/Border 1.png'} width={500} height={900} alt='Road'/>
        <Image className='hidden md:block opacity-50' src={'/images/Border 1.png'} width={500} height={900} alt='Road'/>
      </div>

      {/* Car */}
      <div ref={carRef} className='absolute flex items-center'>
        <Image
          src={'/images/Car Frame 2.png'}
          height={500}
          width={1000}
          alt='Car'
        />
      </div>

    </div>
  )
}

export default CarAnimation