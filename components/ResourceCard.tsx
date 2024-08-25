import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FaForward } from "react-icons/fa6";

function ResourceCard() {
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
              {title[idx]}
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
