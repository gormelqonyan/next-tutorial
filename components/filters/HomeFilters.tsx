"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn, fromUrlQuery, removeQueryFromUrl } from "@/lib/utils";

const filters = [
  { name: "Newest", value: "newest" },
  { name: "Recommended Questions", value: "recommended" },
  { name: "Frequent", value: "frequent" },
  { name: "Unanswered", value: "unanswered" },
];

const HomeFilters = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filterParams = searchParams.get("filter");

  const [activeFilter, setActiveFilter] = useState(filterParams || "");

  const handleFilterChange = (filter: string) => {
    let newUrl = "";
    if (filter === activeFilter) {
      setActiveFilter("");
      newUrl = removeQueryFromUrl({
        searchParams,
        keys: ["filter"],
      });
    } else {
      setActiveFilter(filter);

      newUrl = fromUrlQuery({
        searchParams,
        key: "filter",
        value: filter,
      });
    }

    router.push(newUrl, { scroll: false });
  };

  return (
    <div className={"mt-[30px] flex items-center gap-3"}>
      {filters.map((filter) => {
        return (
          <Button
            key={filter.name}
            className={cn(
              "bg-light-800 dark:bg-dark-300 text-dark-500 dark:text-light-500 hover:dark:bg-dark-400 hover:bg-primary-100 rounded-lg px-6 py-3 text-sm font-medium",
              activeFilter === filter.value &&
                "bg-primary-100 dark:bg-dark-400 !text-primary-500",
            )}
            onClick={() => handleFilterChange(filter.value)}
          >
            {filter.name}
          </Button>
        );
      })}
    </div>
  );
};

export default HomeFilters;
