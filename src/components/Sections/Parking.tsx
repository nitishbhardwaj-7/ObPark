"use client"
import Image from "next/image";
import HoverAccordion from "../Layout/HoverAccordion";
import ParagraphText from "../Texts/ParagraphText";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const Parking = () => {
  const carRef = useRef(null)
  useEffect(() => {

  gsap.fromTo(
    carRef.current,
    { y: -50 }, // start above
    {
      y: 530, // move downward
      ease: "none",
      scrollTrigger: {
        trigger: carRef.current,
        start: "top 70%",
        end: "top 10%",
        scrub: true
      }
    }
  )

}, [])
  return (
    <div className="my-10 lg:my-20 flex flex-col gap-10 lg:gap-16 px-4">

      {/* Header */}
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">

       <div className="flex items-start justify-center">
         <Image
          src="/images/ParkingAnimImg.png"
          alt="bg"
          width={40}
          height={50}
          className="hidden md:block"
        />
         <Image
         ref={carRef}
          src="/images/CarAnimImg.png"
          alt="bg"
          width={70}
          height={100}
          className="absolute"
        />
       </div>

        <div className="w-full lg:w-180 flex flex-col gap-6">

          <HoverAccordion
            defaultOpen={0}
            items={[
              {
                id: "ie-design",
                wrapperClassName: "border-primary/40 px-4 lg:px-6 py-4 lg:py-6",
                heading: (
                  <h3 className={`text-lg lg:text-xl text-[#074038] mgbold`}>
                    Faster Parking
                  </h3>
                ),
                content: (
                  <p className="text-xs max-w-md leading-6">
                    Skip the hunt, grab the spot. Reserve parking in seconds and get where you're going without the hassle.
                  </p>
                ),
              },
              {
                id: "ie-automation",
                wrapperClassName: "border-y border-primary/40 px-4 lg:px-6 py-4 lg:py-6",
                heading: (
                  <h3 className={`text-lg lg:text-xl text-[#074038] mgbold`}>
                    Smarter Navigation
                  </h3>
                ),
                content: (
                  <p className="text-xs max-w-md leading-6">
                    Follow real-world AR/MR overlays that guide you straight to your destination.
                  </p>
                ),
              },
              {
                id: "ie-collaboration",
                wrapperClassName: "border-b border-primary/40 px-4 lg:px-6 py-4 lg:py-6",
                heading: (
                  <h3 className={`text-lg lg:text-xl text-[#074038] mgbold`}>
                    Enhanced Convenience
                  </h3>
                ),
                content: (
                  <p className="text-xs max-w-md leading-6">
                    Enjoy add-ons like EV charging, valet services, or car washing while you shop, travel, or work.
                  </p>
                ),
              },
              {
                id: "ie-analytics",
                wrapperClassName: "border-b border-primary/40 px-4 lg:px-6 py-4 lg:py-6",
                heading: (
                  <h3 className={`text-lg lg:text-xl text-[#074038] mgbold`}>
                    Personalized Experience
                  </h3>
                ),
                content: (
                  <p className="text-xs max-w-md leading-6">
                    Receive promotions, tailored offers, and reminders designed around your needs.
                  </p>
                ),
              },
              {
                id: "ie-peace",
                wrapperClassName: "border-b border-primary/40 px-4 lg:px-6 py-4 lg:py-6",
                heading: (
                  <h3 className={`text-lg lg:text-xl text-[#074038] mgbold`}>
                    Peace Of Mind
                  </h3>
                ),
                content: (
                  <p className="text-xs max-w-md leading-6">
                    Access safety alerts, mapped emergency exits, and secure parking options at any facility.
                  </p>
                ),
              },
            ]}
          />

          <div className="flex items-center h-auto lg:h-30 bg-[#a0f2df] rounded-xl mx-2 lg:mx-8 py-4 lg:py-0">
            <div className="flex items-center px-4 lg:px-5 gap-2">
              <Image
                src='/images/ParkingSectionIcon.png'
                alt=""
                height={100}
                width={50}
                className="shrink-0"
              />
              <ParagraphText size="md">
                Obpark turns traditional parking into a smart, connected service ecosystem
              </ParagraphText>
            </div>
          </div>

        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full lg:w-150 h-64 sm:h-80 md:h-96 lg:h-150 lg:max-w-[920px] overflow-hidden rounded-3xl">
          <img
            src="/images/ParkingMainImage.png"
            alt="Immersive Experience preview"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default Parking;