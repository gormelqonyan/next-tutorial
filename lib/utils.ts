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

export const getTimeStamp = (date: Date): string => {
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) return `${years} ${years === 1 ? "year" : "years"} ago`;
  if (months > 0) return `${months} ${months === 1 ? "month" : "months"} ago`;
  if (days > 0) return `${days} ${days === 1 ? "day" : "days"} ago`;
  if (hours > 0) return `${hours} ${hours === 1 ? "hour" : "hours"} ago`;
  if (minutes > 0) return `${minutes} ${minutes === 1 ? "min" : "mins"} ago`;
  return "just now";
};
