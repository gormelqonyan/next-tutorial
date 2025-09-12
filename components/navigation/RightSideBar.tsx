import Link from "next/link";
import React from "react";

import TagCard from "@/components/cards/TagCard";
import { ROUTES } from "@/constants";

type PopularTags = { id: string; name: string; questionCount: number };
type Network = { id: string; network: string };

const networks: Network[] = [
  {
    id: "1",
    network:
      "Would it be appropriate to point out an error in another paper during a referee report?",
  },
  {
    id: "2",
    network: "How can an airconditioning machine exist?",
  },
  {
    id: "3",
    network: "Interrogated every time crossing UK Border as citizen",
  },
  {
    id: "4",
    network: "Low digit addition generator",
  },
  {
    id: "5",
    network: "What is an example of 3 numbers that do not make up a vector?",
  },
];
const popularTags: PopularTags[] = [
  {
    id: "1",
    name: "react",
    questionCount: 100,
  },
  {
    id: "2",
    name: "javascript",
    questionCount: 120,
  },
  {
    id: "3",
    name: "typescript",
    questionCount: 150,
  },
  {
    id: "4",
    name: "nextjs",
    questionCount: 50,
  },
  {
    id: "5",
    name: "react-query",
    questionCount: 10,
  },
];

const RightSideBar = () => {
  return (
    <aside
      className={
        "background-light900_dark200 dark:border-dark-200 light-border shadow-light-300 sticky top-[80px] h-[calc(100vh_-_80px)] max-w-[330px] overflow-y-auto border-l px-6 pt-12 max-xl:hidden dark:shadow-none"
      }
    >
      <div>
        <h3 className={"h3-bold mb-6"}>Hot Network</h3>
        {networks.map(({ id, network }, index) => {
          return (
            <Link
              href={ROUTES.PROFILE_DETAILS(id)}
              key={index}
              className={"body-medium mb-[30px]"}
            >
              {network}
            </Link>
          );
        })}
      </div>

      <div className={"mt-15"}>
        <h3 className={"h3-bold mb-6"}>Popular Tags</h3>
        <div className={"flex flex-col gap-4"}>
          {popularTags.map(({ id, name, questionCount }) => {
            return (
              <TagCard key={id} id={id} name={name} count={questionCount} />
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default RightSideBar;
