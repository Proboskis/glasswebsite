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
      <main className="min-h-screen min-w-screen bg-no-repeat bg-cover bg-left flex justify-center"
            style={{backgroundImage: `url(${bgImage.src})`}}>
          <section className="bg-white mx-8 my-4 w-4/5 bg-opacity-60 bg-clip-padding"
                   style={{backdropFilter: "blur(20px)"}}>

          </section>
      </main>
  );
}
