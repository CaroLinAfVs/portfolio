// pages/about.js
import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Image from 'next/image';

const About = () => {
  return (
    <div className="divide-y divide-slate-700 h-screen">
      <Navbar />
      {/*body*/}
      <div className="flex flex-col justify-center items-center mb-12">
        {/*header*/}
        <div className="flex items-end flex-grow mt-8 min-h-80">
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIgMqSnkvNobGbKhq3TnGEPv7kmcwJLTdsJg&s"
            alt="gatito"
            className="w-48 h-48 object-cover rounded-full"
          />
        </div>
        {/*text*/}
        <div className="my-7  flex flex-col items-center justify-center gap-14 w-1/2">
          <div className="text-pretty text-center">
            <h1 className="font-sans font-bold text-5xl mb-4">
              My name is carolina
            </h1>
            <p className="text-2xl tracking-wide leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              laoreet diam eu leo molestie tempus. Sed tristique blandit
              sagittis. Quisque ac malesuada urna, nec pellentesque justo. Nulla
              consectetur ex nec pellentesque iaculis.
            </p>
          </div>
          <div className="text-pretty text-center">
            <h1 className="font-bold font-sans text-2xl mb-4">About</h1>
            <p className="leading-relaxed">
              Vivamus sit amet bibendum elit. Morbi imperdiet ex scelerisque,
              luctus ante a, feugiat nibh. Nulla pretium enim ac vulputate
              dignissim. Morbi finibus leo nec turpis molestie, id interdum
              mauris condimentum. Mauris sodales risus lacus, sit amet.
            </p>
          </div>
          <div className="text-center ">
            <h1 className="font-bold font-sans text-2xl mb-4">Skills</h1>
            <ul className="leading-loose">
              <li>Lorem ipsum dolor / sit amet consectetur</li>
              <li>consectetur adipiscing elit</li>
              <li>Lorem ipsum dolo-sit amet</li>
              <li>consectetur / adipiscing </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
