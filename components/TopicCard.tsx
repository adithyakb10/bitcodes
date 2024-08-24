import Link from "next/link";
import { RiJavascriptFill } from "react-icons/ri";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import { Button } from "./ui/button";

interface TopicCardProps {
  title: string;
  desc: string;
  link: string;
}

export default function TopicCard({ title, desc, link }: TopicCardProps) {
  return (
    <div className="flex flex-col border-2 border-cyan-500 rounded-md p-5 w-full md:w-64 text-left">
      <div className="flex gap-2 items-center ">
        <RiJavascriptFill
          color="#00ffff"
          size={30}
        />
        <p className="font-bold text-[20px] text-white">{title}</p>
      </div>
      <p className="pt-3 text-cyan-200">{desc}</p>
      <div className="self-end pt-2">
        <Button
          variant="outline"
          className="gap-2"
        >
          <Link href={link}>Learn more</Link>
          <IoChevronForwardCircleSharp
            color="#9ce5ee"
            size={20}
          />
        </Button>
      </div>
    </div>
  );
}
// text-[#00ffff]
