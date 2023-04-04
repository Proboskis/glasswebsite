import Link from 'next/link'


export default function Navigation() {
    return (
        <div className="min-w-screen flex justify-center w-auto">
            <ul className="flex flex-row justify-around w-[50rem] border-white text-xl font-thin text-white border-y py-8">
                <li>
                    <Link href="#" className="relative px-3 after:content-[''] after:absolute after:block after:w-[100%]
                    after:h-[3px] after:bg-orange-600 after:scale-x-0 after:transform-gpu after:duration-300 after:my-5
                    after:rounded-md hover:after:scale-x-[1]">
                        početna
                    </Link>
                </li>
                <li>
                    <Link href="#">o nama</Link>
                </li>
                <li>
                    <Link href="#">gledala</Link>
                </li>
                <li>
                    <Link href="#">kontakt</Link>
                </li>
            </ul>
        </div>
    );
}
