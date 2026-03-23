"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function ParkingCarAnimation() {
  const carRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Step-by-step path (adjust these values to match your road)
    tl.to(carRef.current, {
      x: 100,
      y: 50,
      duration: 1,
    })
      .to(carRef.current, {
        x: 200,
        y: 150,
        duration: 1,
      })
      .to(carRef.current, {
        x: 300,
        y: 120,
        duration: 1,
      })
      .to(carRef.current, {
        x: 400,
        y: 200,
        duration: 1,
      });

  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-[200vh] flex items-center justify-center"
    >
      {/* Background Image (your path is here) */}
      <Image
        src="/images/ParkingAnimImg.png"
        alt="parking"
        width={500}
        height={400}
      />

      {/* Car */}
      <Image
        ref={carRef}
        src="/images/CarAnimImg.png"
        alt="car"
        width={70}
        height={100}
        className="absolute top-0 left-0"
      />
    </div>
  );
}