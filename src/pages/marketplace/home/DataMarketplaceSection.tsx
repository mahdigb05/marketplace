import CardContainer from "../../../components/conatiner-components/CardContainer";
import {DataObject as DataType} from "../../../types";
import DataObjectPreview from "../../../components/conatiner-components/DataObjectPreview";
import Button from "../../../components/core/Button";
import useHttp from "../../../hooks/useHttp"
import {fetchNewestDataObjects} from "../../../api/fetchNewestDataObjects"
import {fetchtDataObjects} from "../../../api/fetchDataObjects"
import { useEffect } from "react";
import Skeleton from "../../../components/core/Skeleton"

interface LoadingProps{
    count : number
}

const LoadingObjects = ({count} : LoadingProps) => {
    return(
        <>
            {
                Array.from({length : count}, () => <Skeleton className="w-full h-20"/>)
            }
        </>
    )
}



const DataMarketplaceSection = () => {

    const {data : newestDataObject, sendRequest : getNewestDataObjects, pending : isNewDataObjectsLoading, error : newestDataObjectError} = useHttp(fetchNewestDataObjects);
    const {data : coreDataObjects, sendRequest : getDataObjects, pending : isDataObjectsLoading, error : coreDataObjectError} = useHttp(fetchtDataObjects);

    useEffect(
        () => {
            getNewestDataObjects();
        },[getNewestDataObjects]
    )
    
    useEffect(
        () => {
            getDataObjects({page : 1, size : 6, visibility : "PROMINENT"});
        },[getDataObjects]
    )

    

    return (
        <CardContainer className="p-4 md:p-5 flex flex-col gap-4 md:gap-8">
            <h3>Data Marketplace</h3>
            <div className="flex flex-col lg:flex-row justify-between md:gap-10 gap-4">
                <div className="w-auto lg:w-2/3 flex flex-col gap-4">
                    <h4 className="text-2xl font-bold ">Core data objects</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <>
                                {
                                    isDataObjectsLoading && <LoadingObjects count={6}/>
                                }
                        
                                {
                                    coreDataObjects && !isDataObjectsLoading  && (coreDataObjects as DataType[]).map(obj => <DataObjectPreview key={obj.object.rid} dataObject={obj}/>)
                                            
                                }
                                {
                                    coreDataObjectError && <p>somthing went wrong ...</p> 
                                }
                        </>
                    </div>
                </div>
                <Button className="m-auto rounded-xl flex md:hidden" type="link">
                    Access Marketplace
                </Button>

                <div className="w-auto md:w-1/2 lg:w-1/3 flex flex-col gap-4">
                    <h4 className="text-2xl font-bold ">New data objects</h4>
                    <div className="flex flex-col gap-4">
                        <>
                            {
                                isDataObjectsLoading && <LoadingObjects count={3}/>
                            }
                            {
                                newestDataObject && !isNewDataObjectsLoading  && 
                                    (newestDataObject as DataType[]).map(obj =>
                                            <DataObjectPreview key={obj.object.rid} dataObject={obj}/>
                                        )
                                    
                            }
                            {
                                newestDataObjectError && <p>somthing went wrong ...</p> 
                            }
                        </>
                    </div>
                </div>
            </div>
            <Button className="m-auto rounded flex" type="link">
                Access Marketplace
            </Button>
        </CardContainer>
    )
}

export default DataMarketplaceSection;
