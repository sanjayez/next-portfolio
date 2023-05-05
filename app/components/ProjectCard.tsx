import Image from "next/image";
import { Project } from "../types/project";

const ProjectCard = ({
  title,
  preview,
  href,
  blurVersion,
  description,
}: Project) => {
  return (
    <div
      className={`max-w-xs rounded-md overflow-hidden flex justify-center overflow-hidden`}
    >
      <Image
        src={href}
        alt={title}
        blurDataURL={blurVersion}
        placeholder="blur"
        width={300}
        height={150}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default ProjectCard;
