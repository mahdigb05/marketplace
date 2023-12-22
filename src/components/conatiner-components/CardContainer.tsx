import {FC, HTMLProps, ReactNode} from "react";
import {twMerge} from "tailwind-merge";

interface SectionContainerProps extends HTMLProps<HTMLDivElement> {
    children: ReactNode;
}

const CardContainer: FC<SectionContainerProps> = ({children, className,  ...rest}) => {
    return (
        <div className={twMerge(` rounded p-[1px] border-primary border-[1px] bg-white`, className)} {...rest}>
                {
                    children
                }
        </div>
    )
}

export default CardContainer;