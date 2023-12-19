import {FC} from "react";
import {useLockBody} from "../hooks/useLockBody";

interface MobileNavProps {
    navItems: {
        title: string;
        link: string;
    }[]
}

const MobileNav: FC<MobileNavProps> = ({navItems}) => {
    useLockBody()
    return (
        <nav className={`w-full flex flex-col gap-9 px-3`}>
            <ul className={`flex flex-col gap-5 items-start items-start list-none flex-grow`}>
                {
                    navItems.map(item => <li>
                        <p className="font-bold text-3.5">
                            {item.title}
                        </p>
                    </li>)
                }
            </ul>
        </nav>
    )
}

export default MobileNav;