import React, { useState, useEffect  } from 'react';
import AOS  from 'aos'
import 'aos/dist/aos.css'

import { NewspaperIcon, PhoneIcon, SupportIcon } from '@heroicons/react/outline'

const supportLinks = [
  {
    name: 'Sales',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: PhoneIcon,
  },
  {
    name: 'Technical Support',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: SupportIcon,
  },
  {
    name: 'Media Inquiries',
    href: '#',
    description:
      'Varius facilisi mauris sed sit. Non sed et duis dui leo, vulputate id malesuada non. Cras aliquet purus dui laoreet diam sed lacus, fames.',
    icon: NewspaperIcon,
  },
]

export const About = () =>{
  useEffect(() => {
    AOS.init({
      delay: 200,
      duration: 1200,
      once: false,
    }, [])
  
   }) 
  
  return (
    
    <div className="bg-white mt-20">
    <div className="relative">
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-300" />
    </div>
    <div className="relative flex justify-center" data-aos="zoom-out"
    data-aos-offset="300"
    data-aos-easing="ease-in-sine">
      <span className="px-3 bg-white text-lg font-medium text-gray-900">Who is Simon Agbey?</span>
    </div>
  </div>
    {/* Header */}
      <div className="relative pb-32 bg-gray-800 mt-20" data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="./img/simon-bg.png"
            alt="simon-web-developer"
          />
          <div className="absolute inset-0 bg-gray-800 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">About</h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
          Around 2004 at the age of 27. I have bought a computer which was part my preparation to learn                   coding, but things did not worked as I expected. 2020 when covid-19 started and we were given lockdown, I decided to chace my dream which is coding.

          I challege myself that age is just a number, therefore we should not let it be standbleblock of chasing a dream of our life.

         I will like to thanks Couesra.org for given me the opportunity to have access to the responsive web development and design course by gold smith universty of london, Jonas from udemy, Brad Traversy udemy, Mai meteorjs and other usefull tutorial from Youtube.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8" data-aos="fade-left"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div key={link.name} className="flex flex-col bg-white rounded-2xl shadow-xl">
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-gradient-to-r from-green-400 to-cyan-500 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-medium text-gray-900">{link.name}</h3>
                <p className="mt-4 text-base text-gray-500">{link.description}</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a href={link.href} className="text-base font-medium text-cyan-700 hover:text-gradient-to-r from-green-400 to-cyan-500">
                  Contact us<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}