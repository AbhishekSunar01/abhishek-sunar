// import Image from "next/image";
// import { Card } from "./ui/card";

// import { StaticImageData } from "next/image";

// interface Skill {
//   label: string;
//   image: StaticImageData;
// }

// interface SkillGroupProps {
//   title: string;
//   skills: Skill[];
// }

// export default function SkillGroup({ title, skills }: SkillGroupProps) {
//   return (
//     <div className="mb-8 w-full">
//       <h2 className="mb-4 text-xl font-bold">{title}</h2>
//       <div className="flex flex-wrap gap-4">
//         {skills.map((skill, idx) => (
//           <Card
//             key={idx}
//             className="w-40 h-24 flex flex-col items-center justify-center gap-2"
//           >
//             <Image
//               src={skill.image}
//               alt={`${skill.label} Logo`}
//               width={40}
//               height={40}
//             />
//             <span className="text-sm font-semibold">{skill.label}</span>
//           </Card>
//         ))}
//       </div>
//     </div>
//   );
// }

import Image, { StaticImageData } from "next/image";
import { Card } from "./ui/card";

interface Skill {
  label: string;
  image: StaticImageData;
}

interface SkillGroupProps {
  title: string;
  skills: Skill[];
}

export default function SkillGroup({ title, skills }: SkillGroupProps) {
  return (
    <div className="md:mb-8 w-full">
      <h2 className="md:mb-4 mb-2 text-xl font-bold">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, idx) => (
          <Card
            key={idx}
            className="flex flex-col items-center justify-center gap-2 p-4 sm:p-6 shadow-md hover:shadow-lg transition"
          >
            <Image
              src={skill.image}
              alt={`${skill.label} Logo`}
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="text-xs sm:text-sm md:text-base font-semibold text-center">
              {skill.label}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
}
