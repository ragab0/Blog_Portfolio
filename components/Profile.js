import Image from "next/image";
import THELegend from "@/public/legend.jpeg";

export default function Profile() {
  return (
    <div className=" mx-auto my-16 w-fit border-4 border-slate-600 rounded-full shadow-2xl overflow-hidden">
      <Image
        className="img w-[280px] h-[280px] -translate-x-6 scale-125 -translate-y-8"
        src={THELegend}
        alt="THE Legend"
        width={200}
        height={200}
        
        priority={true}
      />

    </div>
  )
}
