import {FC} from "react";
import {CheckIcon, ExclamationIcon} from "../core/icons";
import { DataObject } from "../../types";

interface DataObjectContainerProps {
    dataObject: DataObject;
}

const DataObjectPreview: FC<DataObjectContainerProps> = ({dataObject}) => {

    const {object, metadata} = dataObject;
    const {displayName, status, description} = object

    return (
        <div 
                       className="hover:bg-blue-100 hover:ring-sky-500 cursor-pointer gradient-primary p-[1px] rounded">
            <div className="flex justify-between items-start px-4 py-5 bg-white rounded w-full h-full">
                <div className="w-[80%] flex flex-col gap-1.5">
                    <h5 className="text-xl font-bold">{displayName}</h5>
                    {description !== "" && <p className="overflow-ellipsis overflow-hidden whitespace-nowrap">{description}</p>}
                    <div className="text-xs">
                        {metadata && metadata.producers &&                         
                            <>
                            <span>produced by </span>
                                {
                                    (metadata.producers).map((producer, index) => 
                                        <span key={producer}>
                                            <span className="underline">{producer}</span>
                                            {index !== metadata.producers!.length - 1 && <span>, </span>}
                                        </span>
                                    )
                                }
                            </>
                        }
                    </div>
                </div>
                <div>
                    {status === "ACTIVE" ? <CheckIcon/> : <ExclamationIcon/>}
                </div>
            </div>
        </div>
    )
}

export default DataObjectPreview;