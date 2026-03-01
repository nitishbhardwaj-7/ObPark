import React from 'react'
import TitleText from '../Texts/TitleText'
import ParagraphText from '../Texts/ParagraphText'
import FillButton from '../Buttons/FillButton'
import BorderButton from '../Buttons/BorderButton'

function HeroSection() {
  return (
    <div className='bg-transparent'>
      <div className='text-center flex flex-col gap-10 mt-3'>
        <TitleText>Owning The Future</TitleText>
        <ParagraphText>Stop manual bottlenecks. Elevate client experience. Conquer compliance effortlessly. Obrive’s AI-driven automation platform liberates your team from repetitive tasks. Focus on growth, efficiency, and client trust—all from one intuitive dashboard.</ParagraphText>
    </div>
    </div>
  )
}

export default HeroSection