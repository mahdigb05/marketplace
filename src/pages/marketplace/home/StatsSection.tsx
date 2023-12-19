import CardContainer from "../../../components/conatiner-components/CardContainer";

const stats = [
    {
        name: "Data Objects",
        count: 245
    }, {
        name: "Datasets",
        count: 290388
    }, {
        name: "Producers",
        count: 18
    }, {
        name: "Users",
        count: 150
    }
]

const StatsSection = () => {
    return (
        <CardContainer
            className="grid grid-cols-2 grid-rows-2 p-5  md:grid-cols-4 md:grid-rows-1 justify-items-center gap-6">
            {
                stats.map(stat =>
                    <div className="w-[85%]">
                        <CardContainer className="flex flex-col items-center  p-2">
                            <span className="text-primary">{stat.name}</span>
                            <span className="text-2xl font-bold">{stat.count}</span>
                        </CardContainer>
                    </div>
                )
            }
        </CardContainer>
    )
}

export default StatsSection;