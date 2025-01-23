import Navbar from './components/Navbar/page';
import Footer from './components/Footer/page';
import Hero from './components/Hero/page';
import ImageGrid from './components/ImageGrid/page';

export default function Home() {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] divide-y divide-slate-700 min-h-screen">
      <Navbar />
      <div className="flex flex-col items-center justify-center flex-1 p-20">
        <Hero className="font-mono text-4xl sm:text-5xl md:text-6xl text-center font-bold" text="Welcome to my portfolio!" />
        <ImageGrid/>
      </div>
      <Footer />
    </div>
  );
}
