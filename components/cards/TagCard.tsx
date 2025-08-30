import Link from "next/link";
import React from "react";

import { ROUTES } from "@/constants";
import { getDeviconClassName } from "@/lib/utils";

type TagCardProps = {
  id: string;
  name: string;
  count: number;
};

const TagCard = ({ id, name, count }: TagCardProps) => {
  const iconClassName = getDeviconClassName(name);
  return (
    <Link
      href={ROUTES.TAG_DETAILS(id)}
      className={"mb-4 flex items-center justify-between"}
    >
      <div
        className={
          "background-light800_dark300 rounded-2 flex items-center gap-1 px-4 py-2"
        }
      >
        <i className={`${iconClassName}`} />
        <span className={"text-light-400 subtle-medium uppercase"}>{name}</span>
      </div>

      {!!count && (
        <p className={"text-[14px] leading-[13px] font-medium"}>{count}+</p>
      )}
    </Link>
  );
};

export default TagCard;
