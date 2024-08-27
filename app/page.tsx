import TopicCard from "@/components/TopicCard";
import {
  RiJavascriptFill,
  FaPython,
  SiCplusplus,
  FaLaptopCode,
  FaRust,
} from "@/lib/icons";

export default function Home() {
  return (
    <div className="p-10">
      <div className="text-center">
        <h1 className="text-5xl font-bold italic  bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
          BitCodes
        </h1>
        <p className="text-2xl pt-5">
          A <span className="text-purple-500 italic">space</span> to share your
          tips and knowledge on programming <br className="hidden md:block" />
          and related areas
        </p>
        <p className="text-3xl font-bold py-10">Topics</p>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col md:flex-row gap-5 justify-center">
            <TopicCard
              title="JavaScript"
              desc="JavaScript is a versatile, high-level programming language widely used for web development."
              link="/javascript"
              Icon={RiJavascriptFill}
            />
            <TopicCard
              title="Python"
              desc="Python is a versatile, high-level programming language known for its simplicity and readability."
              link="/python"
              Icon={FaPython}
            />
            <TopicCard
              title="C++"
              desc="C++ is a programming language known for its versatility in system/software development."
              link="/c++"
              Icon={SiCplusplus}
            />
          </div>
          <div className="flex flex-col md:flex-row gap-5 justify-center ">
            <TopicCard
              title="Rust"
              desc="Rust is a programming language focused on safety and performance."
              link="/rust"
              Icon={FaRust}
            />
            <TopicCard
              title="Web development"
              desc="Web development is creating and managing websites and web applications."
              link="/web"
              Icon={FaLaptopCode}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
