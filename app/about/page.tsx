import Experience from "@/components/experience";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import yuzu from "@/public/profile.jpeg";

export default function AboutPage() {
  const container =
    "w-full flex items-center justify-center mt-8 flex-col px-24";
  return (
    <div className="mb-16 flex items-center justify-center flex-col">
      <Image
        src={yuzu}
        alt="Profile"
        className="rounded-full"
        width={200}
        height={200}
      />
      <div className="text-center w-[600px] mt-6">
        <h1>Abhishek Sunar</h1>
        <h2 className="text-muted-foreground text-xl">
          Software Engineer | Full Stack Developer
        </h2>
      </div>
      <div className={container}>
        <h2 className="text-start w-full">Background</h2>
        <p className="text-muted-foreground text-lg w-full mt-2 text-justify">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime at
          totam, odio tempora, alias, optio labore nemo expedita rerum provident
          voluptate minima. Aperiam laboriosam est corrupti commodi nostrum
          illum harum.lorem ipsum dolor sit amet consectetur adipisicing elit.
          Quisquam, voluptatum. Doloribus, cumque. Doloremque, Lorem ipsum dolor
          sit amet, consectetur adipisicing elit. Sit, illo reiciendis nulla
          fuga laborum minima neque ipsa eligendi? Consequuntur omnis
          exercitationem nam consectetur quisquam dicta sunt numquam dolorem ut
          deleniti!
        </p>
      </div>

      <div className={container}>
        <h2 className="text-start w-full">Experience</h2>
        <div className="flex items-start justify-between w-full mt-2 flex-col">
          <Experience title="Software Engineer at XYZ Corp" />
          <div className="border-2 h-12 ml-3"></div>
          <Experience title="Software Engineer at XYZ Corp" />
          <div className="border-2 h-12 ml-3"></div>
          <Experience title="Software Engineer at XYZ Corp" />
          <div className="border-2 h-12 ml-3"></div>
          <Experience title="Software Engineer at XYZ Corp" />
        </div>
      </div>
      <div className={container}>
        <h2 className="text-start w-full">Education</h2>
        <div className="flex items-center justify-start gap-6 w-full">
          <GraduationCap />
          <div>
            <h3 className="text-lg font-semibold">
              Informatics College Pokhara
            </h3>
            <span className="text-muted-foreground">2022 - Present</span>
          </div>
        </div>
        <p className="text-muted-foreground text-lg w-full mt-2 text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          voluptatum. Doloribus, cumque. Doloremque, Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Sit, illo reiciendis nulla fuga laborum
          minima neque ipsa eligendi? Consequuntur omnis exercitationem nam
          consectetur quisquam dicta sunt numquam dolorem ut deleniti!
        </p>
      </div>
    </div>
  );
}
