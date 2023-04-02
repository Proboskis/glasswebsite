import bgImage from './background_glass2.jpg';
import Navbar from './Navbar';

export default function Home() {
  return (
      <div className="min-h-screen min-w-screen bg-no-repeat bg-cover bg-fixed relative flex flex-col justify-center
            overflow-hidden" style={{backgroundImage: `url(${bgImage.src})`}}>
            <div className="h-full w-screen top-0 left-0 absolute bg-teal-900 inline-block
                bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 flex flex-col justify-around">
                <Navbar />
                <div className="flex justify-center items-center">
                    <h1 className="text-9xl text-white font-bold tracking-wide mb-36 z-10">Staklo Design</h1>
                </div>
            </div>
      </div>
  );
}
