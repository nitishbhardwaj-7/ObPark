import BorderButton from '@/src/components/Buttons/BorderButton'
import FillButton from '@/src/components/Buttons/FillButton'
import CarAnimation from '@/src/components/Layout/CarAnimation'
import GreenCard from '@/src/components/Layout/GreenCard'
import Header from '@/src/components/Layout/Header'
import SmHeader from '@/src/components/Layout/SmHeader'
import HeroSection from '@/src/components/Sections/HeroSection'
import RiveCard from '@/src/components/Sections/RiveCard'
import ParagraphText from '@/src/components/Texts/ParagraphText'
import Image from 'next/image'
import React from 'react'

function page() {
  return (

    <main className='min-h-screen'>
      <div className='min-h-screen bg-linear-to-r from-[#C7EDE4] to-[#9BF2DE] flex flex-col items-center'>
      <Header />

      <div className='flex flex-col w-[84%] md:w-[45%] items-center mt-5'>
        <HeroSection />
      </div>
      <div className='items-center w-[90%] md:w-[72%] h-93 md:h-145 flex flex-col mt-15 gap-7 border-b'>
        <div className='flex gap-4 md:gap-0 w-full md:w-[27%] justify-between'>
          <FillButton size='md'>TALK TO ELLA</FillButton>
          <BorderButton size='lg'>LEARN MORE</BorderButton>
        </div>
        <div className='flex w-full gap-4 md:gap-0 md:mt-10 justify-between'>
          <div className='hidden md:block'>
            <RiveCard />
          </div>
          <RiveCard />
          <RiveCard />
          <div className='hidden md:block'>
            <RiveCard />
          </div>
        </div>
        <div className='flex flex-col w-full items-start uppercase gap-3 md:flex-row md:items-center md:justify-between md:mt-13'>
          <BorderButton size='sm'>NEWS</BorderButton>
          <ParagraphText size='sm'>Powering Your brand Workflows with Intelligent Automation</ParagraphText>
        </div>
      </div>

      <div className='relative w-[90%] md:[72%] lg:w-[72%] overflow-hidden'>
        <Image
          src="/images/Linked Path Group.svg"
          alt="bg"
          width={1100}
          height={1000}
          className="absolute top-25 right-0 hidden md:block"
        />

        <div className='text-2xl mt-15 ml-3 leading-7.5 w-full md:w-[65%]'>
          <h1 className='mgbold mb-5 md:text-4xl'>
            Streamline processes. Empower people. Obrive enables organisations to modernise operations through smart automation—turning manual effort into strategic execution.
          </h1>
          <BorderButton size='lg'>OUR MISSION</BorderButton>
        </div>
        <div className='relative z-10 mb-20'>
          <video autoPlay muted loop playsInline controls className='rounded-4xl mt-30 mb-5 md:rounded-[3rem]' src="/videos/obriveintro.mp4"></video>
          <div className='w-full md:w-[60%] md:ml-15'>
            <ParagraphText size='md'>Stay ahead of the future—create immersive Augmented Reality, Virtual Reality, and Mixed Reality experiences, design stunning 3D environments, and harness the power of spatial computing—all from one innovative platform with Obrive Industries.</ParagraphText>
          </div>


        </div>

      </div>

    </div>

    <div className='bg-white h-200 w-full '>

      <CarAnimation/>

      <div className='md:flex items-center justify-center gap-10 pt-15'>
    <GreenCard title='Smart Parking Solution' description='Our Smart Parking Solution offers fast vehicle access within 3 seconds, automatic transaction recording for hassle-free payments, and real-time parking spot availability to minimize search time.visits stress-free and convenient.' imageSrc='/images/card1img.jpg' imgAlt=''/>
    <GreenCard title='Access Management System' description='Our Smart Parking Solution offers fast vehicle access within 3 seconds, automatic transaction recording for hassle-free payments, and real-time parking spot availability to minimize search time.visits stress-free and convenient.' imageSrc='/images/card2img.jpg' imgAlt=''/>


      </div>

      <CarAnimation/>

    </div>


    </main>
  )
}

export default page