import Experience from "@/components/experience";
import { GraduationCap } from "lucide-react";
import Image from "next/image";
import yuzu from "@/public/profile.jpeg";

export default function AboutPage() {
  const container =
    "w-full flex items-center justify-center md:mt-8 mt-2 flex-col md:px-24";

  return (
    <div className="md:mb-16 mb-6 flex items-center justify-center flex-col">
      {/* Profile Image */}
      <Image
        src={yuzu}
        alt="Profile"
        className="rounded-full"
        width={200}
        height={200}
      />

      {/* Header */}
      <div className="text-center md:w-[600px] mt-6">
        <div className="md:text-3xl text-xl font-bold">Abhishek Sunar</div>
        <div className="text-muted-foreground md:text-xl text-sm mt-2">
          Software Engineer | Full Stack Developer
        </div>
        <div className="text-muted-foreground md:text-base text-xs italic mt-1">
          Tutor & Guitarist
        </div>
      </div>

      {/* Background */}
      <div className={container}>
        <h2 className="text-start w-full md:text-2xl text-xl font-semibold">
          Background
        </h2>
        <p className="text-muted-foreground md:text-lg text-md w-full md:mt-2 mt-1 text-justify leading-relaxed">
          I work with a modern stack, specializing in <strong>Next.js</strong>{" "}
          for responsive, high-performance front-ends and{" "}
          <strong>Spring Boot</strong> for robust and secure back-ends. Over
          time, I’ve built projects ranging from SaaS tools and dashboards to
          e-commerce platforms and custom applications, always focusing on clean
          architecture, performance, and maintainability. Beyond just coding, I
          enjoy solving real-world problems through technology, continuously
          learning, and experimenting with new frameworks and ideas to stay
          ahead in the ever-changing web development landscape.
        </p>
      </div>

      {/* Experience */}
      <div className={container}>
        <h2 className="text-start w-full md:text-2xl text-xl font-semibold">
          Experience
        </h2>
        <div className="flex items-start justify-between w-full mt-2 flex-col space-y-8">
          <Experience
            title="Academic Tutor at Informatics College Pokhara"
            timeline="Feb, 2025 - Present"
            location="Matepani-12, Pokhara, Kaski, Nepal"
            descriptionPoints={[
              "Led workshops and tutorials on Java programming fundamentals.",
              "Guided students in object-oriented programming and problem-solving.",
              "Supported practical sessions to strengthen coding proficiency.",
            ]}
          />

          <Experience
            title="ReactJs Tutor at Mind Craft Academy"
            timeline="Oct, 2024 - Jan, 2025"
            location="Mahendrapool, Pokhara, Nepal"
            descriptionPoints={[
              "Guided students through fundamental and advanced React concepts.",
              "Taught state management, component lifecycle, and modern front-end practices.",
              "Mentored students through hands-on projects and problem-solving exercises.",
            ]}
          />

          <Experience
            title="Front End Developer at KROFILE LLC."
            timeline="Dec, 2023 - Jan, 2025"
            location="Concord, NC 28025 US (Remote – Nepal)"
            descriptionPoints={[
              "Developed high-performance websites for krofile.com using Next.js.",
              "Collaborated with designers and backend developers to deliver client projects.",
              "Optimized front-end code for speed, scalability, and maintainability.",
            ]}
          />

          <Experience
            title="ReactJs Intern at Brand Builder"
            timeline="Sep, 2023 - Nov, 2023"
            location="Mahendrapool, Pokhara, Nepal"
            descriptionPoints={[
              "Assisted in developing responsive and dynamic websites.",
              "Gained hands-on experience in front-end development using React.js.",
            ]}
          />
        </div>
      </div>

      {/* Education */}
      <div className={container}>
        <h2 className="text-start w-full md:text-2xl text-xl font-semibold">
          Education
        </h2>
        <div className="flex items-center justify-start gap-6 w-full mt-2">
          <GraduationCap />
          <div>
            <h3 className="text-lg font-semibold">
              Informatics College Pokhara
            </h3>
            <span className="text-muted-foreground">2021 - 2023</span>
          </div>
        </div>
        <p className="text-muted-foreground md:text-lg text-md w-full mt-2 text-justify leading-relaxed">
          Pursuing my Bachelor’s in Computing, where I’ve strengthened my
          foundation in software engineering, algorithms, and database systems.
          Alongside academics, I actively contribute to practical projects,
          teaching, and freelance development work, which has helped me balance
          theory with real-world application.
        </p>
      </div>
    </div>
  );
}
