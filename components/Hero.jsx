"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { useEffect, useRef } from "react";

// "use client" is a directive in Next.js 13+ that marks a component as a Client Component. This means:

// The component runs in the browser (not on the server).
// You can use browser APIs, hooks like useState, useEffect, etc.
// It allows interactivity and dynamic behavior.
// Without "use client", the file is treated as a Server Component by default, which cannot use React hooks or browser-only features.


const HeroSection = () => {
    const imageRef = useRef();

useEffect(() => {
const imageElement = imageRef.current;

const handleScroll = () => {
const scrollPosition = window. scrollY;
const scrollThreshold = 100;

if(scrollPosition>scrollThreshold){
imageElement.classList.add("scrolled");
}
else{
    imageElement.classList.remove("scrolled");
}

};

window. addEventListener("scroll", handleScroll);
return ()=> window.removeEventListener("scroll", handleScroll);
},[]);
  return (
    <div className="pb-20 px-4">
<div className="container mx-auto text-center">
{/* <h1>
Manage Your Finances <br /> with Intelligence
</h1> */}
<h1 className="text-5xl md:text-8xl lg:text-[105px] pb-6 font-extrabold tracking-tighter pr-2  text-transparent bg-clip-text bg-gradient-to-br from-blue-600 
      via-cyan-500 
      to-blue-700">
  Empower Your Finances  <br />  with Intelligent Insights
</h1>

<p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto ">
An AI-driven financial platform that empowers you to track, analyze, and optimize spending with powerful real-time insights.
</p>
<div className="flex justify-center space-x-4">
<Link href="/dashboard">
<Button size="1g" className="px-8">
Get Started
</Button>
</Link>
<Link href="https://www.youtube.com/roadsidecoder">
<Button size="1g" variant="outline" className="px-8">
About the Project 
</Button>
</Link>
</div>
<div className="hero-image-wrapper">
<div ref={imageRef} className="hero-image">
<Image
src="/banner.jpg"
width={1280}
height={720}
alt="Dashboard Preview" 
className="rounded-lg shadow-2x1 border mx-auto"
priority/>

</div>


</div>
</div>
</div>
  )
}

export default HeroSection;