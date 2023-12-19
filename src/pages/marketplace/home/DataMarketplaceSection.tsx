import CardContainer from "../../../components/conatiner-components/CardContainer";
import {DataObject} from "../../../components/types";
import DataObjectPreview from "../../../components/conatiner-components/DataObjectPreview";
import Button from "../../../components/core/Button";

const dataObjects: DataObject[] = [
    {
        iconUrl: "",
        name: "[Group] Exchange rate",
        description: "Small object presentation over 2 line...",
        producers: ["Omega", "Salesforce"],
    }, {
        iconUrl: "",
        name: "Claims",
        description: "Small object presentation over 2 line...",
        producers: ["Omega", "Salesforce"],
    }, {
        iconUrl: "",
        name: "Grief",
        description: "Small object presentation over 2 line...",
        producers: ["Omega", "Salesforce"],
    }, {
        iconUrl: "",
        name: "[Group] Exchange rate",
        description: "Small object presentation over 2 line...",
        producers: ["Omega", "Salesforce"],
    }, {
        iconUrl: "",
        name: "Claims",
        description: "Small object presentation over 2 line...",
        producers: ["Omega", "Salesforce"],
    }, {
        iconUrl: "",
        name: "Grief",
        description: "Small object presentation over 2 line...",
        producers: ["Omega", "Salesforce"],
    }
]

const coreObjects: DataObject[] = [
    {
        iconUrl: "",
        name: "[Group] Exchange rate",
        description: "Small object presentation over 2 line...",
        producers: ["Omega", "Salesforce"],
    }, {
        iconUrl: "",
        name: "Claims",
        description: "Small object presentation over 2 line...",
        producers: ["Omega", "Salesforce"],
    }, {
        iconUrl: "",
        name: "Grief",
        description: "Small object presentation over 2 line...",
        producers: ["Omega", "Salesforce"],
    },
]

const DataMarketplaceSection = () => {
    return (
        <CardContainer className="p-4 md:p-5">
            <h2 className="text-4xl font-bold mb-5">Data Marketplace</h2>
            <div className="flex flex-col lg:flex-row justify-between gap-10">
                <div className="w-auto  lg:w-2/3">
                    <h4 className="text-2xl font-bold ">Core data objects</h4>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-8">
                        {
                            dataObjects.map(obj =>
                                <DataObjectPreview dataObject={obj}/>
                            )
                        }
                    </div>
                </div>

                {/*<div className="f-full bg-gray-400 w-1"></div>*/}

                <div className="w-auto md:w-1/2 lg:w-1/3">
                    <h4 className="text-2xl font-bold ">New data objects</h4>
                    <div className="flex flex-col gap-5 my-8">
                        {
                            coreObjects.map(obj =>
                                <DataObjectPreview dataObject={obj}/>
                            )
                        }
                    </div>
                </div>
            </div>
            <Button className="m-auto rounded-xl flex" type="link">
                Access Marketplace
            </Button>
        </CardContainer>
    )
}

export default DataMarketplaceSection;