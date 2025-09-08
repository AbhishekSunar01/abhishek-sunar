import { BriefcaseBusiness } from "lucide-react";

type ExperienceProps = {
  title: string;
  timeline?: string;
  location?: string;
  descriptionPoints?: string[];
};

export default function Experience({
  title,
  timeline,
  location,
  descriptionPoints,
}: ExperienceProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between gap-6 w-full">
        <BriefcaseBusiness />
        <div className="flex justify-between w-full">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <span className="text-muted-foreground">{timeline}</span>
          </div>
          <span className="text-muted-foreground">{location}</span>
        </div>
      </div>
      <ul className="my-6 ml-14 list-disc [&>li]:mt-2">
        {descriptionPoints?.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}
