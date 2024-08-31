import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FaForward } from "react-icons/fa6";

interface ResourceCardProps {
  links: string[];
  titles: string[];
}

function ResourceCard({ links, titles }: ResourceCardProps) {
  return (
    <div className="flex flex-col border-2 border-cyan-500 rounded-md px-5 pt-5 w-full md:w-[380px] text-left">
      <h1 className="font-bold text-[20px]">Resources</h1>
      <div className="flex flex-col py-2 gap-2">
        {links.map((link, idx) => (
          <Link
            key={idx}
            href={link}
          >
            <Button
              variant="outline"
              className="w-80"
            >
              {titles[idx]}
            </Button>
          </Link>
        ))}
        <Button
          variant="secondary"
          className="w-fit self-end my-2 flex gap-2"
        >
          <Link
            href="/resources/javascript"
            className=""
          >
            Learn More
          </Link>
          <FaForward color="" />
        </Button>
      </div>
    </div>
  );
}

export default ResourceCard;
