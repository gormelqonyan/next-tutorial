"use client";
import Image from "next/image";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { Input } from "@/components/ui/input";
import { fromUrlQuery, removeQueryFromUrl } from "@/lib/utils";

interface SearchInputProps {
  route: string;
  placeholder: string;
  className?: string;
  iconSrc?: string;
}

const SearchInput = ({
  route,
  iconSrc = "/icons/search.svg",
  placeholder,
  className,
}: SearchInputProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  const [value, setValue] = useState(query);

  useEffect(() => {
    const debounceTimeOut = setTimeout(() => {
      let newUrl;
      if (value) {
        newUrl = fromUrlQuery({
          searchParams,
          value,
          key: "query",
        });
      } else if (route === pathname) {
        newUrl = removeQueryFromUrl({
          searchParams,
          keys: ["query"],
        });
      }

      if (newUrl) {
        router.push(newUrl, { scroll: false });
      }
    }, 1000);
    return () => clearTimeout(debounceTimeOut);
  }, [value, router, searchParams, route, pathname]);

  return (
    <div
      className={`background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] p-4 ${className}`}
    >
      <Image src={iconSrc} alt={"search"} width={20} height={20} />
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        className={
          "paragraph-regular no-focus text-dark400_light700 border-none bg-transparent"
        }
      />
    </div>
  );
};

export default SearchInput;
