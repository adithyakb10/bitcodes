import ResourceCard from "@/components/ResourceCard";

function CPlusPlus() {
  let links = [
    "https://www.udemy.com/course/beginning-c-plus-plus-programming/",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "https://www.w3schools.com/cpp/default.asp",
  ];
  let title = ["Beginning C++ Programming", "Official Docs", "W3 Schools"];
  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold italic text-center pb-10 text-cyan-300">
        JavaScript
      </h1>
      <div className="flex flex-col md:flex-row gap-2">
        <ResourceCard
          links={links}
          titles={title}
        />
      </div>
    </div>
  );
}

export default CPlusPlus;
