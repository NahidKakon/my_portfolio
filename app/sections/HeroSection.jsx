"use client"

import Link from 'next/link';
import { socialLinks } from '../utils/dataBase';
import { TextGenerateEffect } from '@/components/ui/text-generate-effect';
import Button from '../components/Button';
import Image from 'next/image';
import Name from '../components/Name';
import Image_Component from '../components/Image Component';

function HeroSection() {
  const renderSocialIcons = () =>
    socialLinks.map(({ href, icon, label }) => (
      <Link
        key={label}
        href={href}
        aria-label={label}
        target="_blank"
        // className="text-black transition hover:text-orange-500 duration-300"

         className="text-base font-semibold md:text-xl"
      >
        {icon}
      </Link>
    ));

  const paraText = "AI Video Creator | Realistic AI Presenters, Animation & Social Content. <br /> My works not only look great but also deliver seamless user interactions.";

  return (
    <section
      id="home"
      className="grid max-w-6xl gap-4 mx-auto my-6 md:my-12 md:grid-cols-2"
    >
      <div className="self-center justify-self-center">
        <TextGenerateEffect
          className="text-base font-semibold md:text-xl"
          duration={2}
          filter={false}
          words=" Hi, I am"
        />
        <br />

        <Name />

        <br />

        <TextGenerateEffect
          key={paraText}
          className="mb-4 text-black/80 font-normal text-base"
          duration={1}
          filter={false}
          words={paraText}
        />

        <Button className="text-white bg-orange-400 hover:bg-orange-600 transform hover:rotate-y-180 transition-transform duration-5">
          Open for work
        </Button>
      </div>

      <Image_Component />

      <div className="transition-transform duration-300 cursor-pointer hover:-rotate-6">
        {/* <Image
          src="/img2.svg"
          alt="my-image"
          height={100}
          width={100}
          style={{ height: 'auto' }}
          quality={100}
        /> */}
      </div>
    </section>
  );
}

export default HeroSection;