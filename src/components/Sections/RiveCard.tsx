import Image from 'next/image';
import React from 'react'

type RiveCardProps = {
  image: string;
  alt?: string
}

function RiveCard({image , alt = 'CardImage'} : RiveCardProps) {
  return (
    <div className='h-42 md:h-77 w-44 md:w-77 bg-[#074038] rounded-2xl'>

    </div>
  )
}

export default RiveCard