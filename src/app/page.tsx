import bgImage from './background_glass2.jpg';
import Navbar from './Navbar';

export default function Home() {
  return (
      <div className="min-h-screen min-w-screen bg-no-repeat bg-cover bg-fixed relative flex flex-col justify-center
            overflow-hidden" style={{backgroundImage: `url(${bgImage.src})`}}>
            <div className="h-screen w-screen top-0 left-0 absolute bg-teal-900 inline-block
                bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 flex flex-col justify-around p-24">
                <Navbar />
                <div className="flex justify-center">
                    <h1 className="text-9xl text-white font-thin tracking-wide">Staklo Design</h1>
                </div>
                <div className="flex-justify-center">
                    <p className="text-white text-md font-thin text-center">vam nudi ogledala po meri, termopan staklo, kaljeno staklo za kuhinje, kao i obradu, bušenje, brušenje i peskiranje stakla.</p>
                </div>
            </div>
      </div>
  );
}
