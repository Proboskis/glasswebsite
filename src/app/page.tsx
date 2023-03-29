import bgImage from './background_glass.jpg';

export default function Home() {
  return (
      <div className="min-h-screen min-w-screen bg-no-repeat bg-cover bg-fixed relative flex flex-col justify-start
            overflow-hidden" style={{backgroundImage: `url(${bgImage.src})`}}>
            <div className="min-h-screen flex justify-center items-center">
                <h1 className="ml-10 text-[11.25rem] text-white font-bold tracking-wide">Staklo Design</h1>
            </div>
            <div className="min-h-screen w-2/3 top-0 left-[50%] absolute bg-teal-900 bg-gray-400 inline-block -skew-x-[26.4deg]
                bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-l border-neutral-400 z-10">
                &nbsp;
            </div>
      </div>
  );
}
