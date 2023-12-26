import { ReactNode, createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useHttp from "../hooks/useHttp";
import { searchDataObjects } from "../api/SearchDataObjects";
import { DataObject } from "../types";

interface SearchContextState {
  filterSettings: FilterSettings;
  page: number;
  pageCount: number;
  onfilterChange(key: string, value: string): void;
  onPageChange(page: number): void;
  dataObjects: DataObject[] | null;
  dataObjectPending: boolean;
  dataObjectError: string | null;
}

const defaultState: SearchContextState = {
  filterSettings: {},
  page: 1,
  pageCount: 1,
  onfilterChange() {},
  onPageChange() {},
  dataObjects: null,
  dataObjectPending: false,
  dataObjectError: null,
};

interface FilterSettings {
  category?: string;
  producer?: string;
  status?: string;
}

const SearchContext = createContext<SearchContextState>(defaultState);

export const SearchContextProvider: React.FC<{ children: ReactNode }> = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [filterSettings, setFilterSettings] = useState<FilterSettings>(() => {
    return {
      category: searchParams.get("category" || undefined),
      status: searchParams.get("status" || undefined),
      producer: searchParams.get("producer" || undefined),
    };
  });
  const [page, setPage] = useState(parseInt(searchParams.get("page") || "1"));
  const [pageCount, setPageCount] = useState(1);

  const { data, sendRequest, pending, error } = useHttp(searchDataObjects);

  function handlePageChange(page: number) {
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.set("page", page.toString());
    setSearchParams(updatedSearchParams);
    setPage(page);
  }

  function updateFilter(key: string, value: string) {
    const updatedSearchParams = new URLSearchParams(searchParams);
    updatedSearchParams.set(key, value);
    updatedSearchParams.set("page", "1");
    setPage(1);
    setSearchParams(updatedSearchParams.toString);
  }

  function search() {
    const query = searchParams.get("searchQuery");
    const category = searchParams.get("category");
    const producer = searchParams.get("producer");
    const status = searchParams.get("status");
    const page = searchParams.get("page");

    sendRequest({
      page,
      size: 5,
      category,
      producer,
      status,
      query,
    });
  }

  useEffect(() => {
    search();
  }, [searchParams]);

  return (
    <SearchContext.Provider
      value={{
        page: page,
        filterSettings: filterSettings,
        pageCount: pageCount,
        dataObjectError: error,
        dataObjectPending: pending,
        dataObjects: data as DataObject[],
        onfilterChange: updateFilter,
        onPageChange: handlePageChange,
      }}
    ></SearchContext.Provider>
  );
};

export default SearchContext;
