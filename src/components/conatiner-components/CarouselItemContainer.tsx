import {FC} from "react";

interface CarouselItemContainerProps {
    slide: {
        imgUrl: string;
        heading: string;
        description: string;
    }
}

const CarouselItemContainer: FC<CarouselItemContainerProps> = ({slide}) => {
    const {imgUrl, heading, description} = slide;
    return (
        <div className={`bg-[url('${imgUrl}')]`}>
            <p>{heading}</p>
            <p>{description}</p>
        </div>
    )
}

export default CarouselItemContainer;