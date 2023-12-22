import {useLayoutEffect, useRef, useState} from "react";
import Button from "../components/core/Button";
import MobileNav from "./MobileNav";
import {CloseIcon} from "../components/core/icons";
import images from "../assets/images";
import {NavLink} from "react-router-dom";

const navItems = [
    {
        link: "",
        title: 'MARKETPLACE'
    },
    {
        link: '',
        title: 'ACADEMY',
    }
]

const MainNav = () => {

    const [isNavOpen, setIsNavOpen] = useState(false);
    const mobileNavRef = useRef<HTMLDivElement>(null);

    function handleNavStateChange() {
        setIsNavOpen(!isNavOpen);
    }

    useLayoutEffect(() => {

        function handleResize() {
            if (mobileNavRef && mobileNavRef.current) {
                //leveraging the display css property set by tailwind on screen size change class to check
                //if the mobile navbar is displayed. If not we set the isNavbarOpen state to "false"
                //to prevent the display of the mobile navbar when resizing from a large screen to a smaller one
                const computedStyle = window.getComputedStyle(mobileNavRef.current);
                const isHidden = computedStyle.getPropertyValue('display') === "none";
                if (isHidden) setIsNavOpen(false);
            }
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);

    }, [])

    return (
        <div
            className={`max-w-6xl flex flex-col m-auto md:items-center gap-5 bg-white ${isNavOpen ? "h-screen" : ""}`}>
            <div className="w-full h-20 flex md:flex-col items-center md:justify-around justify-between">
                <nav
                    className="hidden md:block self-start">
                    <ul className={`flex flex-row gap-8 list-none items-center`}>
                        <li>
                            <NavLink to={"/"}>
                                <img className="w-24 h-auto" src={images.logo}/>
                            </NavLink>
                        </li>
                        {
                            navItems.map(item => <li>
                                <NavLink to="" className="font-bold">
                                    {item.title}
                                </NavLink>
                            </li>)
                        }

                    </ul>
                </nav>
                <Button onClick={handleNavStateChange} className="w-max md:hidden" type="text">
                    {isNavOpen ? <CloseIcon/> :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                        </svg>}
                </Button>
                <img className="w-24 h-auto md:hidden" src={images.logo}/>
            </div>
            {
                isNavOpen &&
                <div ref={mobileNavRef} className="flex-grow md:hidden">
                    <MobileNav navItems={navItems}/>
                </div>
            }
        </div>
    )

}

export default MainNav;