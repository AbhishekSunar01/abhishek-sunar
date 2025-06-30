// Frontend logos
import html from "@/public/html.png";
import css from "@/public/css.png";
import react from "@/public/react.png";
import tanstack from "@/public/tanstack.png";
import scss from "@/public/scss.png";
import tailwind from "@/public/tailwind.png";
import redux from "@/public/redux.svg";
import zustand from "@/public/zustand.png";

// Backend logos
import java from "@/public/java.png";
import spring from "@/public/spring.ico";
import nodejs from "@/public/nodejs.png";
import express from "@/public/express.png";

// Database logos
import mongodb from "@/public/mongo.png";
import mysql from "@/public/mysql.png";
import postgresql from "@/public/postgresql.png";

// Tools & Technologies
import git from "@/public/git.png";
import github from "@/public/github.svg";
import gitlab from "@/public/gitlab.svg";
import docker from "@/public/docker.png";
import SkillGroup from "./skill-group";

export default function Skills() {
  return (
    <div className="w-full flex flex-col gap-10">
      <SkillGroup
        title="Frontend"
        skills={[
          { label: "HTML", image: html },
          { label: "CSS", image: css },
          { label: "React", image: react },
          { label: "Tailwind CSS", image: tailwind },
          { label: "SCSS", image: scss },
          { label: "TanStack", image: tanstack },
          { label: "Redux", image: redux },
          { label: "Zustand", image: zustand },
        ]}
      />

      <SkillGroup
        title="Backend"
        skills={[
          { label: "Java", image: java },
          { label: "Spring", image: spring },
          { label: "Node.js", image: nodejs },
          { label: "Express", image: express },
        ]}
      />

      <SkillGroup
        title="Databases"
        skills={[
          { label: "MongoDB", image: mongodb },
          { label: "MySQL", image: mysql },
          { label: "PostgreSQL", image: postgresql },
        ]}
      />

      <SkillGroup
        title="Tools & Technologies"
        skills={[
          { label: "Git", image: git },
          { label: "GitHub", image: github },
          { label: "GitLab", image: gitlab },
          { label: "Docker", image: docker },
        ]}
      />
    </div>
  );
}
