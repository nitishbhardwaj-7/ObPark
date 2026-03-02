import Image from 'next/image'
import React from 'react'

function CarAnimation() {
  return (
        <div className='border-b-4 border-t-4 h-10 md:h-20 mt-15 border-gray-300 flex relative items-center'>
                <div className='flex overflow-hidden'>
                  <Image
                  className='opacity-50'
                src={'/images/Border 1.png'}
                width={500}
                height={900}
                alt='CarImage'
                />
                <Image
                className='hidden md:block opacity-50'
                src={'/images/Border 1.png'}
                width={500}
                height={900}
                alt='CarImage'
                />
                <Image
                className='hidden md:block opacity-50'
                src={'/images/Border 1.png'}
                width={500}
                height={900}
                alt='CarImage'
                />
                <Image
                className='hidden md:block opacity-50'
                src={'/images/Border 1.png'}
                width={500}
                height={900}
                alt='CarImage'
                />
                </div>
        
                <div className='absolute flex items-center'>
                  <Image
                  src={'/images/Car Frame 2.png'}
                  height={500}
                  width={1000}
                  alt='Animation'
                  />
                </div>
                
        
              </div>
  )
}

export default CarAnimation