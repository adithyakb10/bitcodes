import ResourceCard from "@/components/ResourceCard";

function JavaScript() {
  let links = [
    "https://www.udemy.com/course/the-complete-javascript-course/?couponCode=SKILLS4SALEA",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "https://www.w3schools.com/js/DEFAULT.asp",
  ];
  let title = [
    "The Complete JavaScript Course 2024",
    "MDN Web Docs",
    "W3 Schools",
  ];
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

export default JavaScript;
