import CardContainer from "../../../components/conatiner-components/CardContainer";
import ReactPaginate from "react-paginate";
import { useContext } from "react";
import SearchContext from "../../../context/searchContext";
import Skeleton from "../../../components/core/Skeleton";
import DataObjectPreview from "../../../components/conatiner-components/DataObjectPreview";

const LoadingObjects = () => {
  return (
    <>
      {Array.from({ length: 5 }, () => (
        <Skeleton className="w-full h-20" />
      ))}
    </>
  );
};

const DataObjectsSection = () => {
  const {
    page,
    pageCount,
    onPageChange,
    dataObjects,
    dataObjectPending,
    dataObjectError,
  } = useContext(SearchContext);

  // need to handle errors and loading state
  // might only need what is previously implemented

  return (
    <CardContainer className="flex flex-col h-full p-5 justify-between">
      <h3 className="font-bold">Data Objects</h3>

      {dataObjectPending && <LoadingObjects />}

      {dataObjectError && <p>somthing went wrong...</p>}

      {dataObjects && (
        <>
          <div>
            {dataObjects.map((obj) => (
              <DataObjectPreview dataObject={obj} />
            ))}
          </div>
          <div className="w-[80%] mx-auto">
            <ReactPaginate
              forcePage={page}
              breakLabel="..."
              nextLabel="next >"
              onPageChange={(selected) => onPageChange(selected.selected)}
              pageRangeDisplayed={1}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              containerClassName="flex w-full items-center justify-between"
              activeClassName="border-2 border-primary w-12"
              // nextLinkClassName="border-2 border-gray-300"
              // previousLinkClassName="border-2 border-gray-300"
              pageLinkClassName="p-3 inline-block rounded"
              pageClassName="text-center  rounded"
              previousClassName="border-2 border-primary p-3 text-center rounded"
              nextClassName="border-2 border-primary p-3 text-center rounded"
            />
          </div>
        </>
      )}
    </CardContainer>
  );
};

export default DataObjectsSection;
