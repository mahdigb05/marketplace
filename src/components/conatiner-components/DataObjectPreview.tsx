import {FC, PropsWithoutRef} from "react";
import {DataObject} from "../types";
import CardContainer from "./CardContainer";
import {twMerge} from "tailwind-merge";
import {CheckIcon} from "../core/icons";

interface DataObjectContainerProps extends PropsWithoutRef<CardContainer> {
    dataObject: DataObject;
}

const DataObjectPreview: FC<DataObjectContainerProps & PropsWithoutRef<CardContainer>> = ({dataObject, ...rest}) => {

    const {description, producers, name} = dataObject;
    const {className, ...props} = rest;

    return (
        <CardContainer {...props}
                       className={twMerge("px-4 py-5 hover:bg-green-100 hover:ring-sky-500 cursor-pointer", className)}>
            <div className="flex justify-between items-start">
                <div className="w-[80%] flex flex-col gap-1.5">
                    <h5 className="text-xl font-bold">{name}</h5>
                    <p className="overflow-ellipsis overflow-hidden whitespace-nowrap">{description}</p>
                    <div className="text-xs">
                        <span>produced by </span>
                        {producers.map((producer, index) => <span key={producer}>
                                <span className="underline">{producer}</span>
                            {index !== producers.length - 1 && <span>, </span>}
                            </span>
                        )}
                    </div>
                </div>
                <div>
                    <CheckIcon/>
                </div>
            </div>
        </CardContainer>
    )
}

export default DataObjectPreview;