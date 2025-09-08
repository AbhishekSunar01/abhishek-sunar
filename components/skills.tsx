import Skill from "./skill";

export default function Skills() {
  return (
    <div className="flex items-center justify-start md:gap-6 gap-2 w-full flex-col">
      <h1 className="text-start w-full">Skills</h1>
      <p className="text-muted-foreground md:text-xl text-md text-start w-full mt-0">
        A comprehensive overview of my technical capabilities and expertise.
      </p>
      <Skill />
    </div>
  );
}
