import bgImage from '../assets/images/background_glass2.jpg';
import Navbar from '../components/Navbar';
import {FaPhoneAlt, FaEnvelope} from "react-icons/Fa";
import {BiWorld} from "react-icons/Bi";
import {IoHome} from "react-icons/all";

export default function Home() {
    return (
        <div className="flex flex-col justify-between bg-no-repeat bg-cover bg-fixed relative overflow-hidden"
             style={{backgroundImage: `url(${bgImage.src})`}}>
            <div className="bg-teal-900 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10">
                <div className="min-h-screen min-w-screen flex flex-col justify-center">
                    <div className="h-screen w-screen top-0 left-0 absolute flex flex-col justify-around p-24">
                        <Navbar />
                        <div className="flex justify-center">
                            <h1 className="text-9xl text-white font-thin tracking-wide">Kontakt</h1>
                        </div>
                        <div className="flex-justify-center">
                            <p className="text-white text-md font-thin text-center">
                                Staklorezac KUM - Kako da nas nadjete, koji broj telefona da pozovete, na koji email da nam pišete? Pogledajte ovde!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="min-h-screen min-w-screen flex flex-col justify-center">
                    <div className="h-screen w-screen absolute flex flex-col justify-center items-center p-24">
                        <div className="border-b py-8 mb-8 w-[60%] flex flex-row justify-start">
                            <FaPhoneAlt className="text-white h-8 w-8 ml-14" />
                            <p className="text-white mr-14 font-light text-2xl ml-14">011.333.00.00</p>
                        </div>
                        <div className="border-b py-8 mb-8 w-[60%] flex flex-row justify-start">
                            <FaEnvelope className="text-white h-8 w-8 ml-14" />
                            <p className="text-white mr-14 font-light text-2xl ml-14">info@primer.rs</p>
                        </div>
                        <div className="border-b py-8 mb-8 w-[60%] flex flex-row justify-start">
                            <BiWorld className="text-white h-8 w-8 ml-14" />
                            <p className="text-white mr-14 font-light text-2xl ml-14">www.staklodesign.com</p>
                        </div>
                        <div className="border-b py-8 flex w-[60%] flex-row justify-start">
                            <IoHome className="text-white h-8 w-8 ml-14" />
                            <p className="text-white mr-14 font-light text-2xl ml-14">Cara Dušana 34, 11080 Zemun, Beograd, Serbia</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}