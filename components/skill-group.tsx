import Image from "next/image";
import { Card } from "./ui/card";

interface Skill {
  label: string;
  image: any;
}

interface SkillGroupProps {
  title: string;
  skills: Skill[];
}

export default function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <div className="mb-8 w-full">
      <h2 className="mb-4 text-xl font-bold">{title}</h2>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, idx) => (
          <Card
            key={idx}
            className="w-40 h-24 flex flex-col items-center justify-center gap-2"
          >
            <Image
              src={skill.image}
              alt={`${skill.label} Logo`}
              width={40}
              height={40}
            />
            <span className="text-sm font-semibold">{skill.label}</span>
          </Card>
        ))}
      </div>
    </div>
  );
}
