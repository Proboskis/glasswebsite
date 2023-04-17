import NavigationLink from "../NavigationLink";

export default function Navigation() {
    return (
        <div className="min-w-screen flex justify-center w-auto">
            <ul className="flex flex-row justify-around w-[50rem] border-white text-xl font-thin text-white border-y py-8">
                <li>
                    <NavigationLink name={"početna"} href={'#'} />
                </li>
                <li>
                    <NavigationLink name={"o nama"} href={'#'} />
                </li>
                <li>
                    <NavigationLink name={"ogledala"} href={'#'} />
                </li>
                <li>
                    <NavigationLink name={"kontakt"} href={'./contact'} />
                </li>
            </ul>
        </div>
    );
}
