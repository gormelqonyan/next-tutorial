import Link from "next/link";
import React from "react";

import TagCard from "@/components/cards/TagCard";
import Metric from "@/components/Metric";
import { ROUTES } from "@/constants";
import { getTimeStamp } from "@/lib/utils";

const QuestionCard = ({ question }: { question: Question }) => {
  const { createdAt, title, tags, author, upvotes, answers, views, _id } =
    question;
  return (
    <div
      className={
        "card-wrapper border-light-[#C8CBD954] mb-6 rounded-[10px] border px-9 py-7 shadow-none md:px-[45px] md:py-9 dark:border-none"
      }
    >
      <div
        className={
          "text-dark400_light700 font-regular line-clamp-1 block text-xs md:hidden"
        }
      >
        {getTimeStamp(createdAt)}
      </div>
      <Link href={ROUTES.QUESTION(_id)}>
        <h3
          className={"text-dark200_light900 line-clamp-2 text-xl font-semibold"}
        >
          {title}
        </h3>
      </Link>

      <div className={"mt-3 flex flex-wrap items-center gap-2"}>
        {tags.map(({ _id, name }) => {
          return <TagCard key={_id} name={name} id={_id} />;
        })}
      </div>

      <div className={"mt-6 flex items-center justify-between"}>
        <Metric
          isAuthor={true}
          value={author.name}
          imageUrl={author.image}
          alt={author.name}
          href={ROUTES.PROFILE_DETAILS(author._id)}
          title={`• asked ${getTimeStamp(createdAt)}`}
        />

        <div className={"flex items-center gap-1"}>
          <Metric
            imageUrl={"/icons/like.svg"}
            alt={"upvotes"}
            value={upvotes}
            title={"Votes"}
          />
          <Metric
            imageUrl={"/icons/message.svg"}
            alt={"comment"}
            value={answers}
            title={"Answers"}
          />
          <Metric
            imageUrl={"/icons/eye.svg"}
            alt={"share"}
            value={views}
            title={"Views"}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
