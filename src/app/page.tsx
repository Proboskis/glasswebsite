import bgImage from './background_glass.jpg';

export default function Home() {
  return (
    /*<div className="w-screen h-screen bg-gray-100">
      <div className="px-20 py-10 grid grid-cols-3 gap-5 min-w-full min-h-full">
          <div className="bg-orange-100"></div>
          <div className="bg-orange-100"></div>
          <div className="bg-orange-100"></div>
          <div className="bg-orange-100"></div>
          <div className="bg-orange-100"></div>
          <div className="bg-orange-100"></div>
          <div className="bg-orange-100"></div>
          <div className="bg-orange-100"></div>
          <div className="bg-orange-100"></div>
          <div className="bg-orange-100"></div>
      </div>
    </div>*/
      <div className="min-h-screen min-w-screen bg-no-repeat bg-cover bg-fixed flex flex-col justify-start"
           style={{backgroundImage: `url(${bgImage.src})`}}>
          <nav className="bg-gray-100 w-screen m-0 h-16 bg-opacity-20 bg-clip-padding"
               style={{backdropFilter: "blur(20px)"}}>
          </nav>
          <main className="bg-white w-screen h-64 bg-opacity-20 bg-clip-padding"
                style={{backdropFilter: "blur(20px)"}}>
          </main>
          <section className="bg-white w-screen h-16 bg-opacity-20 bg-clip-padding"
                   style={{backdropFilter: "blur(20px)"}}>
          </section>
      </div>
  );
}
