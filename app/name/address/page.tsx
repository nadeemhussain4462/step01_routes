import Link from "next/link";
import Image from "next/image";
import karachi from '../../../public/karachi.png'
export default function GiveAddress() {
  return (
    <div className="bg-slate-400 text-center font-bold font-sans">
      <Image className="flex  mx-40"
       src={karachi}
      height={800}
      width={1000}
      alt="Pakistan img"
    />
      I live in Karachi, Pakistan....!
    </div>
  );
}
