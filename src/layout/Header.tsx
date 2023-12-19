import Button from "../components/core/Button";
import {FC, useState} from "react";

interface HeaderProps {
    onNavMenuStateChange(): void;
}

const Header: FC<HeaderProps> = (props) => {

    const {onNavMenuStateChange} = props;
    const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);

    return (
        <nav className=" w-full h-20">
            <div className="max-w-6xl m-auto flex justify-between md:px-3 h-full bg-green-300 w-full">
                <ul className={`flex flex-col md:flex-row gap-2.5 items-center items-start list-none p-0 absolute md:relative top-20 md:top-0 ${isNavMenuOpen ? "overflow-y-hidden" : ""}`}>
                    <li>
                        <h5 className="font-bold">
                            HOME
                        </h5>
                    </li>
                    <li>
                        <h5 className="font-bold">
                            MARKETPLACE
                        </h5>
                    </li>
                    <li>
                        <h5 className="font-bold">
                            PRODUCTS
                        </h5>
                    </li>
                    <li>
                        <h5 className="font-bold">
                            ACADEMY
                        </h5>
                    </li>
                    <li>
                        <h5 className="font-bold">
                            NEWS
                        </h5>
                    </li>
                </ul>
                <Button onClick={() => {
                    onNavMenuStateChange();
                    setIsNavMenuOpen(!isNavMenuOpen);
                }} className="md:hidden px-3">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                </Button>
            </div>
        </nav>
    )
}

export default Header;