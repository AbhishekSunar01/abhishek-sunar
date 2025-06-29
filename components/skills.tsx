import Skill from "./skill";

export default function Skills() {
  return (
    <div className="flex items-center justify-start gap-6 w-full flex-col">
      <h1 className="text-start w-full">Skills</h1>
      <p className="text-muted-foreground text-xl text-start w-full mt-0">
        A comprehensive overview of my technical capabilities and expertise.
      </p>
      <Skill />
    </div>
  );
}
