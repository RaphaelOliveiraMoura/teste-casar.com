"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import { cn } from "../services/classname";
import { debounce } from "../services/debounce";

type SearchInputTextProps = React.InputHTMLAttributes<HTMLInputElement>;

export function SearchInputText({ className, ...props }: SearchInputTextProps) {
  const { replace } = useRouter();

  const handleSearchText = debounce((searchText: string) => {
    const urlParams = new URLSearchParams();
    urlParams.set("q", searchText);
    replace(`/detalhes?${urlParams.toString()}`);
  });

  return (
    <label className={cn(className, "relative w-full max-w-[600px]")}>
      <input
        className="w-full rounded-sm border py-2 pl-4 pr-8"
        type="text"
        onChange={(e) => handleSearchText(e.target.value)}
        {...props}
      />
      <div className="absolute right-2 top-1/2 -translate-y-1/2">
        <Search />
      </div>
    </label>
  );
}
