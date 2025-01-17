import Link from 'next/link';

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] divide-y divide-slate-700 min-h-screen ">
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
      <div className="flex flex-col items-center justify-center flex-1 p-20">
        <h1 className="font-mono text-4xl text-wrap text-center font-bold px-2 mb-9">
          We are creative agency that specializes in making customers passionate
        </h1>
        {/*galeria de imagenes*/}
        <div className="grid grid-cols-3 gap-4 w-full justify-items-center">
          <img
            src=""
            alt="imagen 1"
            className="bg-orange-400 w-full h-80 rounded-lg"
          />
          <img
            src=""
            alt="imagen 2"
            className="bg-orange-400 w-full h-80 rounded-lg"
          />
          <img
            src=""
            alt="imagen 3"
            className="bg-orange-400 w-full h-80 rounded-lg"
          />
          <img
            src=""
            alt="imagen 4"
            className="bg-orange-400 w-full h-80 rounded-lg"
          />
        </div>
      </div>
      {/*Footer*/}
      <div className="flex flex-col items-center justify-around p-4 h-auto">
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
}
