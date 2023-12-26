import SearchDescriptionSection from "./SearchDescriptionSection";
import FilterSection from "./FilterSection";
import StatsSection from "../home/StatsSection";
import DataObjectsSection from "./DataObjectsSection";
import { SearchContextProvider } from "../../../context/searchContext";

const SearchPage = () => {
  return (
    <div className="flex flex-col gap-5">
      <SearchDescriptionSection />
      <StatsSection />
      <SearchContextProvider>
        <div className="flex flex-grow gap-5 h-[43rem]">
          <div className="w-2/3 h-full">
            <DataObjectsSection />
          </div>
          <div className="w-1/3">
            <FilterSection />
          </div>
        </div>
      </SearchContextProvider>
      {/*<DataObjectsSection />*/}
    </div>
  );
};

export default SearchPage;
