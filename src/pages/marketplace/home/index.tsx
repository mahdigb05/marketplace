import SerchSection from "./SerchSection";
import DataMarketplaceSection from "./DataMarketplaceSection";
import AcademySection from "./AcademySection";
import StatsSection from "./StatsSection";
import CarouselSection from "./CarouselSection";

const MarketplaceHome = () => {
    return (
        <div className="flex flex-col gap-5">
            <SerchSection/>
            <CarouselSection/>
            <StatsSection/>
            <DataMarketplaceSection/>
            <AcademySection/>
        </div>
    )
}

export default MarketplaceHome;