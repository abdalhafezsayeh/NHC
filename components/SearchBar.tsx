import SearchIcon from "@/assets/svg/SearchIcon";
import { useEffect, useRef, useState } from "react";

type Props = {
  onSearch: (query: string) => void;
  isResult: string;
  countProduct: number;
};

export default function SearchBar({ onSearch, isResult, countProduct }: Props) {
  const [query, setQuery] = useState("");
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const delay = setTimeout(() => {
      onSearch(query);
    }, 600);

    return () => clearTimeout(delay);
  }, [query, onSearch]);

  return (
    <div
      className={`flex ${isResult} justify-center duration-500 transition-all`}
    >
      <div>
        <h1 className="text-lg font-bold mb-2 text-nhc">
          Search products by keyword
        </h1>
        <div className="relative w-[300px] sm:w-[400px] md:w-[600px] xl:w-[730px]">
          <input
            type="text"
            placeholder="Search keyword"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full border border-[#006483D1] p-2 rounded-md placeholder:text-sm bg-[#F3F3F3]"
          />
          <span className="absolute right-3 top-2">
            <SearchIcon />
          </span>
        </div>
        {!isFirstRender.current && (
          <p className="py-5">Total results count: {countProduct}</p>
        )}
      </div>
    </div>
  );
}
