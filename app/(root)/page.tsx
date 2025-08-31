import HomeFilters from "@/components/filters/HomeFilters";
import SearchInput from "@/components/search/SearchInput";
import { Button } from "@/components/ui/button";

export default async function Home() {
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
      <section>
        <div>Question 1</div>
        <div>Question 2</div>
        <div>Question 3</div>
        <div>Question 4</div>
      </section>
    </>
  );
}
