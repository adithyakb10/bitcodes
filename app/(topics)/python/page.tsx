import ResourceCard from "@/components/ResourceCard";
import { title } from "process";

function Python() {
  let links = [
    "https://www.udemy.com/course/100-days-of-code/",
    "https://docs.python.org/3/",
    "https://www.w3schools.com/python/",
  ];
  let titles = ["100 days of Python", "Official Docs", "W3 Schools"];
  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold italic text-center pb-10 text-cyan-300">
        Python
      </h1>
      <div className="flex flex-col md:flex-row gap-2">
        <ResourceCard
          links={links}
          titles={titles}
        />
      </div>
    </div>
  );
}

export default Python;
