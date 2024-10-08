import TopicCard from "@/components/TopicCard";
import {
  RiJavascriptFill,
  RiShieldCheckLine,
  FaPython,
  SiCplusplus,
  FaLaptopCode,
  FaRust,
  AiOutlineRobot,
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
        <p className="text-3xl font-bold py-10 underline">Topics</p>
        <p className="text-2xl pb-10 text-[#059cb8] font-semibold">
          Programming Languages
        </p>
        <div className="flex flex-col items-center">
          <div className="flex flex-col gap-5 w-fit">
            <div className="flex flex-col md:flex-row gap-5 justify-center">
              <TopicCard
                title="JavaScript"
                desc="JavaScript is a versatile, high-level programming language widely used for web development."
                link="/javascript"
                Icon={RiJavascriptFill}
                active={true}
              />
              <TopicCard
                title="Python"
                desc="Python is a versatile, high-level programming language known for its simplicity and readability."
                link="/python"
                Icon={FaPython}
                active={true}
              />
              <TopicCard
                title="C++"
                desc="C++ is a programming language known for its versatility in system/software development."
                link="/c++"
                Icon={SiCplusplus}
                active={true}
              />
            </div>
            <div className="flex flex-col md:flex-row gap-5 self-start ">
              <TopicCard
                title="Rust"
                desc="Rust is a programming language focused on safety and performance."
                link="/rust"
                Icon={FaRust}
                active={false}
              />
            </div>
          </div>
          <p className="text-2xl py-10 text-[#059cb8] font-semibold">Domains</p>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col md:flex-row gap-5 self-start">
              <TopicCard
                title="Web development"
                desc="Web development is creating and managing websites and web applications."
                link="/web"
                Icon={FaLaptopCode}
                active={false}
              />
              <TopicCard
                title="Cyber Security"
                desc="Cybersecurity protects systems and data from digital threats."
                link="/cybersecurity"
                Icon={RiShieldCheckLine}
                active={false}
              />
              <TopicCard
                title="AI/ML"
                desc="AI/ML enables machines to learn and make decisions from data."
                link="/ai"
                Icon={AiOutlineRobot}
                active={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
