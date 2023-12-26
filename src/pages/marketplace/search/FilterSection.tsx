import CardContainer from "../../../components/conatiner-components/CardContainer";
import { Select, SelectValue } from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "../../../components/core/Select";
import { Label } from "../../../components/core/Label";
import { FilterSettings } from "../../../types";
import { useSearchParams } from "react-router-dom";
import { useContext, useEffect } from "react";
import SearchContext from "../../../context/searchContext";

const category = [
  {
    title: "Group",
    value: "group",
  },
  {
    title: "ESG",
    value: "esg",
  },
  {
    title: "Underwriting",
    value: "underwriting",
  },
];

const producer = [
  {
    title: "Omega",
    value: "omega",
  },
  {
    title: "Salesforce",
    value: "salesforce",
  },
  {
    title: "WIR",
    value: "wir",
  },
];

const status = [
  {
    title: "Certified",
    value: "certified",
  },
  {
    title: "Experimental",
    value: "experimental",
  },
];

// interface FilterProps {
//   onFilterChange(filterSettings: FilterSettings): void;
//   filterSettings?: FilterSettings;
// }

const FilterSection = () => {
  const { filterSettings, onfilterChange } = useContext(SearchContext);

  return (
    <CardContainer className="flex flex-col h-full p-5">
      <h3 className="font-bold">Filter</h3>

      <div className="p-4 flex flex-col gap-2">
        <Label className="font-bold">Category</Label>
        <Select
          value={filterSettings.category}
          onValueChange={(value) => onfilterChange("category", value)}
        >
          <SelectTrigger className="SelectTrigger" aria-label="Food">
            <SelectValue placeholder="Select a fruit…" />
          </SelectTrigger>
          <SelectContent className="SelectContent">
            {category.map((category) => (
              <SelectItem value={category.value}>{category.title}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <Label className="font-bold">Producer</Label>
        <Select
          value={filterSettings.producer}
          onValueChange={(value) => onfilterChange("producer", value)}
        >
          <SelectTrigger className="SelectTrigger" aria-label="Food">
            <SelectValue placeholder="Select a fruit…" />
          </SelectTrigger>
          <SelectContent className="SelectContent">
            {producer.map((category) => (
              <SelectItem value={category.value}>{category.title}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="p-4 flex flex-col gap-2">
        <Label className="font-bold">Status</Label>
        <Select
          value={filterSettings.status}
          onValueChange={(value) => onfilterChange("status", value)}
        >
          <SelectTrigger className="SelectTrigger" aria-label="Food">
            <SelectValue placeholder="Select a fruit…" />
          </SelectTrigger>
          <SelectContent className="SelectContent">
            {status.map((category) => (
              <SelectItem value={category.value}>{category.title}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </CardContainer>
  );
};

export default FilterSection;
