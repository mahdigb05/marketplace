import {FC, HTMLProps, ReactNode} from "react";
import {twMerge} from "tailwind-merge";

interface SectionContainerProps extends HTMLProps<HTMLDivElement> {
    children: ReactNode;
}

const CardContainer: FC<SectionContainerProps> = ({children, className,  ...rest}) => {
    return (
        <div className={` rounded border-gradient-primary p-[1px]`}>
            <div className={twMerge("rounded w-full h-full  bg-white", className)} {...rest}>
                {
                    children
                }
            </div>
        </div>
    )
}

export default CardContainer;