import {FC, HTMLProps, ReactNode} from "react";
import {twMerge} from "tailwind-merge";

interface ButtonProps extends HTMLProps<HTMLButtonElement> {
    type: "link" | "primary" | "text";
    icon?: ReactNode;
}

const chevronRight = <svg
    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
    stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
</svg>

const linkButton = "bg-gradient-primary py-4 px-5 rounded flex item-center gradient-primary text-white";
const primaryButton = "py-4 px-5 rounded flex text-white bg-gradient-primary "
const textButton = "p-4 rounded flex text-black"

const Button: FC<ButtonProps> = (props) => {
    const {className, children, type, icon, ...rest} = props;

    let styles = "";
    if (type === "link") {
        styles = linkButton
    } else if (type === "text") {
        styles = textButton
    }else {
        styles = primaryButton
    }

    return (
        <button
            className={twMerge(styles, className)}  {...rest}>
            {children}
            {(type === "link" && !icon) && <span className="inline-block ml-3">{chevronRight}</span>}
        </button>
    )
}

export default Button;