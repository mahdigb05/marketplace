import CardContainer from "../../../components/conatiner-components/CardContainer";
import {fetchDataObjectsCount}  from "../../../api/fetchDataObjectsCount"
import {fetchDataSetsCount}  from "../../../api/fetchDataSetsCount"
import useHttp from "../../../hooks/useHttp";
import { useEffect } from "react";


const StatsSection = () => {
    const {data : dataObjectsCount, sendRequest : getDataObjectsCount} = useHttp(fetchDataObjectsCount);
    const {data : dataSetsCount, sendRequest : getDataSetsCount} = useHttp(fetchDataSetsCount);

    useEffect(() => {
        getDataObjectsCount()
        getDataSetsCount()
    },[getDataSetsCount, getDataObjectsCount])
    
    return (
        <CardContainer
            className="grid grid-cols-2 grid-rows-2 p-5  md:grid-cols-4 md:grid-rows-1 justify-items-center gap-6">
                    {/* <div className="w-[85%]"> */}
                        <CardContainer className="flex flex-col items-center  p-2 w-[85%]">
                            <span className="text-primary">Data Objects</span>
                            <span className="text-2xl font-bold">
                                {(Number.isInteger(dataObjectsCount as number)) ? (dataObjectsCount as number) : "-" }
                            </span>
                        </CardContainer>
                        <CardContainer className="flex flex-col items-center  p-2 w-[85%]">
                            <span className="text-primary">Datasets</span>
                            <span className="text-2xl font-bold">
                                {(Number.isInteger(dataSetsCount as number)) ? (dataSetsCount as number) : "-" }
                            </span>
                        </CardContainer>
                        <CardContainer className="flex flex-col items-center  p-2 w-[85%]">
                            <span className="text-primary">Producers</span>
                            <span className="text-2xl font-bold">18</span>
                        </CardContainer>
                        <CardContainer className="flex flex-col items-center  p-2 w-[85%]">
                            <span className="text-primary">Users</span>
                            <span className="text-2xl font-bold">150</span>
                        </CardContainer>
                    {/* </div> */}
        </CardContainer>
    )
}

export default StatsSection;