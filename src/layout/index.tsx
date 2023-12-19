import {FC, ReactNode} from "react";
import MainNav from "./MainNav";
import Breadcrumbs from "../components/core/BreadCrumbs";

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({children}) => {


    return (
        <div className="">
            <div className={`max-h-screen `}>
                <div className="flex-shrink-0 bg-white border-b-2 border-blue-100">
                    {/*<Header onNavMenuStateChange={handleNavMenuOpen}/>*/}
                    <MainNav/>
                </div>

                <main className={`flex flex-col max-w-6xl m-auto gap-2.5 px-2.5 lg:px-0`}>
                    <div className={"hidden md:block mt-1.5"}>
                        <Breadcrumbs/>
                    </div>
                    <div className="py-5">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Layout;