import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="w-screen h-screen bg-gray-100">
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
    </div>
  );
}
