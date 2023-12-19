import {useEffect, useState} from "react";
import CardContainer from "../../../components/conatiner-components/CardContainer";
import {slides} from "../../../assets/caruosel-slides";

const CarouselSection = () => {
    const [current, setCurrent] = useState(0);


    const previousSlide = () => {
        if (current === 0) setCurrent(slides.length - 1);
        else setCurrent(current - 1);
    };

    const nextSlide = () => {
        if (current === slides.length - 1) setCurrent(0);
        else setCurrent(current + 1);
    };

    useEffect(() => {
        const id: number = setInterval(() => {
            nextSlide();
        }, 10000)

        return () => clearInterval(id);

    }, [current])

    return (
        <CardContainer className="p-4 md:p-5 h-[35rem]">
            <div className="overflow-hidden relative h-full">
                <div
                    className={`transition ease-out duration-250 whitespace-nowrap h-full`}
                    style={{
                        transform: `translateX(-${current * 100}%)`,
                    }}
                >
                    {slides.map((slide) => {
                        return <div className=" w-full h-full inline-block">
                            <div className="bg-cover h-[75%] mb-2.5 bg-center"
                                 style={{backgroundImage: `url(${slide.imgUrl})`}}></div>
                            <div className="text-center flex flex-col gap-2.5">
                                <h4 className="text-primary font-bold">{slide.heading}</h4>
                                <h4>{slide.description}</h4>
                            </div>
                        </div>
                    })}
                </div>

                <div
                    className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
                    <button onClick={previousSlide}
                            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    >
                        <span
                            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-focus:ring-gray-800/70">
                            <svg className="w-4 h-4 text-white rtl:rotate-180" aria-hidden="true"
                                 xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M5 1 1 5l4 4"/>
                            </svg>
                            <span className="sr-only">Previous</span>
                        </span>
                    </button>
                    <button onClick={nextSlide}
                            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                    >
                            <span
                                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-focus:ring-gray-800/70">
                                <svg className="w-4 h-4 text-white" aria-hidden="true"
                                     xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                          stroke-width="2"
                                          d="m1 9 4-4-4-4"/>
                                </svg>
                                <span className="sr-only">Next</span>
                            </span>
                    </button>
                </div>

                <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
                    {slides.map((slide, i) =>
                        <button onClick={() => {
                            setCurrent(i);
                        }} key={"circle" + i} className={`w-2 h-2 rounded-full ${
                            i == current ? "bg-primary" : "bg-gray-300"
                        }`} aria-current="true"
                                aria-label="Slide 1" data-carousel-slide-to="0"></button>
                    )}
                </div>
            </div>
        </CardContainer>
    );
}

export default CarouselSection;