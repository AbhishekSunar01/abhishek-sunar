import Image from "next/image";
import { Card } from "./ui/card";
import react from "@/public/react.png";
import html from "@/public/html.png";
import css from "@/public/css.png";
import tanstack from "@/public/tanstack.png";

export default function Skill() {
  return (
    <div className="flex items-start justify-center w-full flex-col">
      <h2>Frontend</h2>
      <div className="flex gap-6 w-full">
        <Card className="w-full flex items-center justify-center gap-2">
          <Image src={html} alt="HTML Logo" width={50} height={50} />
          <span className="text-lg font-semibold">HTML</span>
        </Card>
        <Card className="w-full flex items-center justify-center gap-2">
          <Image src={css} alt="CSS Logo" width={40} height={50} />
          <span className="text-lg font-semibold">CSS</span>
        </Card>
        <Card className="w-full flex items-center justify-center gap-2">
          <Image src={react} alt="React Logo" width={50} height={50} />
          <span className="text-lg font-semibold">React</span>
        </Card>
        <Card className="w-full flex items-center justify-center gap-2">
          <Image src={tanstack} alt="TanStack Logo" width={50} height={50} />
          <span className="text-lg font-semibold">TanStack</span>
        </Card>
      </div>
    </div>
  );
}
