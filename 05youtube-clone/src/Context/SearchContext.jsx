import { createContext, useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [value, setValue] = useState("");
  const [searchRes, setSearchRes] = useState([]);

  return (
    <SearchContext.Provider
      value={{ value, setValue, searchRes, setSearchRes }}
    >
      {children}
    </SearchContext.Provider>
  );
}
