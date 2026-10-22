"use client"

import Image from 'next/image';
import { skills } from '../utils/dataBase';
import Progress from '../components/Progress';
// import { Card } from '@/components/ui/card-hover-effect';
// import { CardContainer } from '@/components/ui/3d-card';
// import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
// import { useState } from "react";
// import { FullScreen } from '@tsparticles/engine';
import ImageZoom from '../components/ImageZoom';
import name from '../components/Name';


function AboutSection() {
  return (

      <section
    
      id="about-Me"
      className="flex flex-col max-w-6xl mx-auto md:flex-row items-center justify-center md:gap-[3rem] md:my-[6rem]"
    >
    
   {/* <ImageZoom src="/key_skills.gif" alt="Zoomable Image" width={2000} height={1000} /> */}
   
      <div className="self-center justify-self-center">

        <h2 className="mb-4 text-3xl font-bold">About Me</h2>
        <p className="mb-4 text-black">
        I am an AI-focused creative professional with an interdisciplinary background spanning textile technology, design, software development, and AI-assisted digital content creation. 
        <br/> <br />
        My journey combines years of professional experience in the textile industry, including managerial and decision-making responsibilities, with a growing focus on AI-powered creative production and software development.
        <br />
        I have developed projects involving AI-generated children's storybook illustrations, animation, 3D environments, web applications, and AI-assisted digital workflows. I also run a YouTube channel featuring AI-animated music videos for toddlers, with approximately 1,200 subscribers and individual videos reaching up to 19,000 views.
        <br /> <br />
        My software development background includes a Next.js portfolio and practical project work involving front-end development, UI/UX, JavaScript, and team collaboration.
<br /> <br />
I bring a combination of creative thinking, technical curiosity, structured problem-solving, and professional project management to my work. I enjoy exploring how AI and programming can make creative workflows more efficient and help transform ideas into engaging digital experiences.
<br />
My goal is to deliver thoughtful, high-quality work that combines creativity with practical execution.</p>
        {/* {skills.map((skill, index) => (
          <Progress
            key={index}
            name={skill.name}
            value={skill.value}
          />
        ))} */}


      </div>
      
    </section>
  );
}

export default AboutSection;
