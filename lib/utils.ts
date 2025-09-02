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
  pathname,
  searchParams,
  key,
  value,
}: {
  pathname: string;
  searchParams: URLSearchParams;
  key: string;
  value: string;
}) => {
  if (!pathname) return;
  const queryString = qs.parse(searchParams.toString());
  queryString[key] = value;

  return qs.stringifyUrl({
    url: pathname,
    query: queryString,
  });
};

export const removeQueryFromUrl = ({
  pathname,
  searchParams,
  keys,
}: {
  pathname: string;
  searchParams: URLSearchParams;
  keys: string[];
}) => {
  if (!pathname) return;
  const queryString = qs.parse(searchParams.toString());

  keys.forEach((key) => {
    delete queryString[key];
  });

  return qs.stringifyUrl(
    { url: pathname, query: queryString },
    { skipNull: true },
  );
};
