import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { Sparkle } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center justify-between py-4">
      <h2 className="flex gap-2 items-center">
        <Sparkle />
        Abhishek. S
      </h2>
      <nav className="flex items-center md:space-x-8 space-x-2">
        <Link href="/">
          <h4 className="hover:text-primary">Skills</h4>
        </Link>
        <Link href="/about">
          <h4>About</h4>
        </Link>
        <div className="md:block hidden "></div>
        <ModeToggle />
      </nav>
    </div>
  );
}
