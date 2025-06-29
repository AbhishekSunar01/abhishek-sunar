import { BriefcaseBusiness } from "lucide-react";

type ExperienceProps = {
  title: string;
};

export default function Experience({ title }: ExperienceProps) {
  return (
    <div className="flex items-center justify-between gap-6">
      <BriefcaseBusiness />
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <span className="text-muted-foreground">2022 - Present</span>
      </div>
    </div>
  );
}
