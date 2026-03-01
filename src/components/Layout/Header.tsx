import Image from 'next/image'
import React from 'react'
import ParagraphText from '../Texts/ParagraphText'
import FillButton from '../Buttons/FillButton'

function Header() {
  const navItems = ['What we do' , 'Work' , 'Ai' , 'Insights' , 'Our story' , 'Join us' , 'Contact Us']
  return (
    <div className='h-22 w-full ml-10 md:w-[72%] flex items-center justify-between'>

      <div>
        <Image 
      src="/OBRIVE ICON TM.svg" 
      alt="Obrive Logo" 
      width={52} 
      height={52} />
      </div>

      <div className='hidden md:flex space-x-9'>
        {navItems.map((item)=>(
          <h1 key={item} className='text-sm'>
            {item}
          </h1>
        ))}
      </div>

      <div className='hidden md:flex items-center space-x-9'>
        <h1 className='text-[12px]'>LOGIN</h1>
        <FillButton size='lg'>Schedule A Call</FillButton>
      </div>

       <div className='md:hidden mr-12'>
        <button aria-label="Open Menu">
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>


    </div>
  )
}

export default Header