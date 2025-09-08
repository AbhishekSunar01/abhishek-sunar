import Skills from "@/components/skills";
import { Button } from "@/components/ui/button";
import profile from "@/public/main.jpeg";
import Image from "next/image";

export default function Page() {
  return (
    <div className="my-16 flex items-center justify-center space-x-4 flex-col">
      <Image
        src={profile}
        alt="Profile"
        className="rounded-full"
        width={200}
        height={200}
      />
      <h1 className="text-center md:w-[600px] mt-6">
        Hi, I’m Abhishek Sunar, a Software Engineer and Web Developer.
      </h1>
      <p className="text-muted-foreground md:text-xl text-md text-center md:w-[700px]">
        I specialize in crafting dynamic, high-performance websites and
        applications that bring ideas to life. With expertise in Next.js for
        modern, responsive front-ends and Spring Boot for robust back-end
        systems, I focus on building scalable, reliable, and user-friendly
        solutions. My goal is simple: to transform complex problems into clean,
        impactful digital experiences that help businesses and users succeed.
      </p>
      <div className="my-4 flex items-center gap-6"></div>
      <a href="/Abhishek-Sunar-cv.pdf" download>
        <Button className="mt-4 p-6 text-xl flex items-center gap-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          Available for work
        </Button>
      </a>

      <div className="md:mt-40 mt-10 w-full">
        <Skills />
      </div>
    </div>
  );
}
