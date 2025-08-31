import { clsx, type ClassValue } from "clsx";
import qs from "query-string";
import { twMerge } from "tailwind-merge";

import { techMap } from "@/constants";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getDeviconClassName(techName: string) {
  const normalaizedTechName = techName.replace(/[ .]/g, "").toLowerCase();

  return techMap[normalaizedTechName]
    ? `${techMap[normalaizedTechName]} colored`
    : "devicon-devicon-plain";
}

export const fromUrlQuery = ({
  searchParams,
  key,
  value,
}: {
  searchParams: URLSearchParams;
  key: string;
  value: string;
}) => {
  const queryString = qs.parse(searchParams.toString());
  queryString[key] = value;

  console.log("window.location.pathname", window.location.pathname);
  console.log("queryString", queryString);

  return qs.stringifyUrl({
    url: window.location.pathname,
    query: queryString,
  });
};

export const removeQueryFromUrl = ({
  searchParams,
  keys,
}: {
  searchParams: URLSearchParams;
  keys: string[];
}) => {
  const queryString = qs.parse(searchParams.toString());

  keys.forEach((key) => {
    delete queryString[key];
  });

  return qs.stringifyUrl(
    { url: window.location.pathname, query: queryString },
    { skipNull: true },
  );
};
