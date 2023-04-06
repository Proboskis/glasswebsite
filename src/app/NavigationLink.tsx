import Link from "next/link";

export default function NavigationLink({href, name}) {
    return (
        <Link href={href} className="relative px-3 after:content-[''] after:absolute after:block after:w-[100%]
            after:h-[3px] after:bg-orange-600 after:scale-x-0 after:transform-gpu after:duration-300 after:my-5
            after:rounded-md hover:after:scale-x-[1]">
            {name}
        </Link>
    );
}