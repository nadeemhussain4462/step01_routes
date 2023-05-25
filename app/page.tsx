import Image from "next/image";
import Link from "next/link";
import Piaic from "../public/Piaic.jpg";
export default function Home() {
  return (
    <div className="bg-slate-400 text-center font-bold font-sans">

      <Image className="flex  mx-40"
        src={Piaic}
        width={1000}
        height={800}
        alt="Picture of the author"
      />
      Hello World This is "PIAIC" Home Page...!
      <br />
    </div>
  );
}
