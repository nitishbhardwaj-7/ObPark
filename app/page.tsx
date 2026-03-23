import NavBar from '@/components/Layout/NavBar'
import BorderButton from '@/components/Buttons/BorderButton'
import FillButton from '@/components/Buttons/FillButton'
import CarAnimation from '@/components/Layout/CarAnimation'
import GreenCard from '@/components/Layout/GreenCard'
import Header from '@/components/Layout/Header'
import SmHeader from '@/components/Layout/SmHeader'
import HeroSection from '@/components/Sections/HeroSection'
import Parking from '@/components/Sections/Parking'
import RiveCard from '@/components/Sections/RiveCard'
import ParagraphText from '@/components/Texts/ParagraphText'
import TitleText from '@/components/Texts/TitleText'
import Image from 'next/image'
import React from 'react'
import CarAnimationReverse from '@/components/Layout/CarAnimationReverse'

function page() {
  return (

    <main className='min-h-screen'>
      <NavBar/>
      <div className='min-h-screen bg-linear-to-r from-[#C7EDE4] to-[#9BF2DE] flex flex-col items-center'>

      <div className='flex flex-col w-[84%] md:w-[45%] items-center mt-25'>
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

      <div className='flex flex-col md:flex-row items-center justify-center gap-12 md:gap-10 pt-15'>
    <GreenCard title='Smart Parking Solution' description='Our Smart Parking Solution offers fast vehicle access within 3 seconds, automatic transaction recording for hassle-free payments, and real-time parking spot availability to minimize search time.visits stress-free and convenient.' imageSrc='/images/SmartParkingSolution.png' imgAlt=''/>
    <GreenCard title='Access Management System' description='Our Smart Parking Solution offers fast vehicle access within 3 seconds, automatic transaction recording for hassle-free payments, and real-time parking spot availability to minimize search time.visits stress-free and convenient.' imageSrc='/images/SmartParkingSolution2.png' imgAlt=''/>


      </div>

      <CarAnimationReverse/>

      <div className='flex items-center justify-center'>
         <Parking/>
      </div>

      <div className='flex flex-col items-center justify-center w-full text-center mt-10 md:mt-35'>

        <div className='flex flex-col items-center justify-center w-90 md:w-240 gap-5 md:gap-10'>
          <h1 className='mgbold text-xl md:text-6xl text-[#074038]'>What Makes Us Different.</h1>
        <p className='text-xs md:text-xl'>At Obpark, we don’t just guide you to a parking space—we redefine how you experience the entire parking journey. Our difference lies in combining cutting-edge immersive technology with practical, real-world solutions that benefit both drivers and businesses.</p>

        </div>

        <div className='bg-[#074038] h-100 w-full mt-35 flex justify-around'>
          <Image
          src='/images/GreenDivRoadImg.png'
          alt=''
          height={100}
          width={100}
          />
          <Image
          src='/images/RoadImg2.png'
          alt=''
          height={100}
          width={100}
          />
          <Image
          src='/images/RoadImg3.png'
          alt=''
          height={100}
          width={100}
          />
          <Image
          src='/images/RoadImg4.png'
          alt=''
          height={100}
          width={100}
          />
          
        </div>

        
      </div>


    </div>


    </main>
  )
}

export default page