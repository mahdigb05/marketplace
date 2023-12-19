import CardContainer from "../../../components/conatiner-components/CardContainer";
import Button from "../../../components/core/Button";

const SearchSection = () => {
    return (
        <CardContainer className="px-8 py-8 md:p-24">
            <div className="md:text-center">
                <h1 className="font-bold mb-10">Which Data are you looking for?</h1>
                <div className="flex gap-3 mb-6 mx-auto md:w-[70%] lg:w-[55%] ">
                    <div className="border-gradient-primary p-[1px] rounded flex-grow">
                        <div className="flex gap-2 h-full w-full rounded px-2 bg-white items-center ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                 stroke="currentColor" className="w-6 h-6 text-primary">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                            </svg>
                            <input autoFocus placeholder="Search in the marketplace"
                                   className="outline-none border-0 w-full h-full"/>
                        </div>
                    </div>
                    <Button className="px-6">Search</Button>
                </div>
                <p className="sm:text-lg text-sm">Effortlessly find the data you need with our search bar</p>
            </div>
        </CardContainer>
    )
}

export default SearchSection;