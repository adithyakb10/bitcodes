import Image from "next/image";

export default function Home() {
  return (
    <div className="p-10">
      <div className="text-center">
        <h1 className="text-5xl font-bold italic  bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-500">
          BitCodes
        </h1>
        <p className="text-2xl pt-5">
          A <span className="text-purple-500 italic">space</span> to share your
          tips and knowledge on programming and related areas
        </p>
      </div>
    </div>
  );
}
