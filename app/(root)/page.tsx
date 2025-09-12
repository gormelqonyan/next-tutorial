import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/filters/HomeFilters";
import SearchInput from "@/components/search/SearchInput";
import { Button } from "@/components/ui/button";

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const questions = [
  {
    _id: "1",
    title: "How to learn React?",
    description: "I want to learn React, can anyone help me?",
    tags: [
      { _id: "1", name: "React" },
      { _id: "2", name: "JavaScript" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date(),
  },
  {
    _id: "2",
    title: "How to learn JavaScript?",
    description: "I want to learn JavaScript, can anyone help me?",
    tags: [
      { _id: "1", name: "JavaScript" },
      { _id: "2", name: "JavaScript" },
    ],
    author: {
      _id: "1",
      name: "John Doe",
      image:
        "https://static.vecteezy.com/system/resources/previews/002/002/403/non_2x/man-with-beard-avatar-character-isolated-icon-free-vector.jpg",
    },
    upvotes: 10,
    answers: 5,
    views: 100,
    createdAt: new Date("2021-09-01"),
  },
];

export default async function Home({ searchParams }: SearchParams) {
  const { filter, query } = await searchParams;
  console.log({ filter, query });
  return (
    <>
      <section
        className={
          "flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center"
        }
      >
        <h1 className={"h1-bold"}>All Questions</h1>
        <Button
          className={"primary-gradient !text-light-900 px-6 py-3 text-base"}
        >
          Ask a Question
        </Button>
      </section>
      <section className={"mt-[30px]"}>
        <SearchInput route={"/"} placeholder={"Search for questions"} />
      </section>
      <HomeFilters />
      {questions.map((question) => {
        return <QuestionCard key={question._id} question={question} />;
      })}
    </>
  );
}
