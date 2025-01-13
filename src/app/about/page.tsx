// pages/about.js
import React from 'react';
import Link from 'next/link';

const About = () => {
  return (
    <div className="divide-y divide-slate-700 h-screen">
      <div className="flex items-center justify-center items-center p-4 h-16">
        <nav className="space-x-8">
          <ul className="flex space-x-6">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Me</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
      {/*body*/}
      <div className="flex flex-col justify-center items-center mb-12">
        {/*header*/}
        <div className="flex items-end flex-grow mt-8 min-h-80">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIgMqSnkvNobGbKhq3TnGEPv7kmcwJLTdsJg&s"
            alt="gatito"
            className="w-48 h-48 object-cover rounded-full"
          />
        </div>
        {/*text*/}
        <div className="my-7  flex flex-col items-center justify-center gap-14 w-1/2">
          <div className="text-pretty text-center">
            <h1 className="font-sans font-bold text-5xl mb-4">My name is carolina</h1>
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
      <div className="flex flex-col items-center justify-around p-4 ">
        <div className="p-4 font-bold flex flex-col justify-center items-center">
          <h1 className="text-3xl">Lets work together</h1>
          <h1 className="text-xl">hello@hello.com</h1>
        </div>
        <div className="flex items-center w-1/2 justify-between">
          <div className="p-4 flex flex-col items-center">
            <h2 className="font-bold mb-2">Quick enlace</h2>
            <ul className="list-none ">
              <li className="hover:text-blue-500">about</li>
              <li className="hover:text-blue-500">home</li>
              <li className="hover:text-blue-500">contact</li>
            </ul>
          </div>
          <div className="p-4 flex flex-col items-center">
            <h2 className="font-bold mb-2">Quick enlace</h2>
            <ul className="list-none ">
              <li className="hover:text-blue-500">github</li>
              <li className="hover:text-blue-500">gmail</li>
              <li className="hover:text-blue-500">phone</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
