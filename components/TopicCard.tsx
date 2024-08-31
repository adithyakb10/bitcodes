import Link from "next/link";
import { IoChevronForwardCircleSharp } from "react-icons/io5";
import { Button } from "./ui/button";
import { IconType } from "react-icons";

interface TopicCardProps {
  title: string;
  desc: string;
  active: boolean;
  link: string;
  Icon: IconType;
}

export default function TopicCard({
  title,
  desc,
  link,
  active,
  Icon,
}: TopicCardProps) {
  return (
    <div className="flex flex-col border-2 border-cyan-500 rounded-md p-5 w-full md:w-72 text-left">
      <div className="flex gap-2 items-center ">
        <Icon
          color="#dddddd"
          size={30}
        />
        <p className="font-bold text-[20px]">{title}</p>
      </div>
      <p className="pt-3 text-cyan-200">{desc}</p>
      <div className="self-end pt-2">
        <Button
          variant="outline"
          className="gap-2"
          disabled={!active}
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
