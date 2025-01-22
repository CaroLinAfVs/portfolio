// pages/contact.js
import React from 'react';
import Link from 'next/link';

const Contact = () => {
  return (
    <div className="divide-y divide-slate-700 h-screen">
      {/*navbar*/}
      <div className="flex items-center justify-center p-4 h-16">
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
      <div className="flex flex-col justify-center items-center mb-6 py-5">
        <div className="flex justify-center items-center flex-grow mt-8 min-h-80">
          <h1 className="font-mono text-xl w-4/5 text-center font-bold leading-relaxed">
            Thank you for visiting my portfolio! If you have a proposal, a
            question, or simply want to connect, I’ve provided several ways to
            reach me.😊
          </h1>
        </div>
        <div className="">
          <form className="bg-zinc-900  p-6 shadow-md rounded-lg mb-8">
            <div className="mb-4 ">
              <label htmlFor="name" className="block text-gray-300 font-semibold">
                Nombre
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 bg-zinc-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Juanito"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-300 font-semibold">
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 bg-zinc-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="juanito@gmail.com"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="subject"
                className="block text-gray-300 font-semibold"
              >
                Asunto
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full p-3 bg-zinc-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Escribe el asunto"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-300 font-semibold"
              >
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-3 bg-zinc-800 border border-gray-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                placeholder="Escribe el mensaje"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-700 transition-all duration-300"
            >
              Enviar
            </button>
          </form>
          {/* Direct Links */}
          <div className="text-center"></div>
          <p className="text-gray-700 mb-4">
            ¿Prefieres contactarme directamente? Aquí tienes mis redes:
          </p>
          <div className="flex items-center justify-center space-x-4">
            <a
              href="mailto:miemail@example.com"
              className="text-white hover:underline hover:text-blue-500 flex items-center justify-around space-x-2 p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              <span>Gmail</span>
              
            </a>
            <a
              href="https://linkedin.com/in/tuusuario"
              className="text-white hover:underline hover:text-blue-500 flex items-center justify-around space-x-2 p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>{' '}
              <span>Linkedin</span>
              
            </a>
            <a
              href="https://github.com/tuusuario"
              className="text-white hover:underline hover:text-blue-500 flex items-center justify-around space-x-2 p-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
              </svg>{' '}
              <span>GitHub</span>
              
            </a>
          </div>
        </div>
      </div>

      {/*footer*/}
      <div className="flex flex-col items-center justify-around p-4 h-60">
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
export default Contact;
