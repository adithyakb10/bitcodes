import ResourceCard from "@/components/ResourceCard";

function JavaScript() {
  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold italic text-center pb-10 text-cyan-300">
        JavaScript
      </h1>
      <div className="flex flex-col md:flex-row gap-2">
        <ResourceCard />
      </div>
    </div>
  );
}

export default JavaScript;
