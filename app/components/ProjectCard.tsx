import React from "react";
import Image from "next/image";
import { Project } from "../types/project";
import Button from "./Button";
import { getClassNames } from "../utils/getClassNames";

const ProjectCard = ({
  title,
  preview,
  href,
  blurVersion,
  description,
}: Project) => {
  const [isLoading, setLoading] = React.useState(true);
  return (
    <div
      className={`max-w-md h-auto rounded-md overflow-hidden flex flex-col justify-center items-center overflow-hidden`}>
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
        onLoadingComplete={() => setLoading(false)}
        className={getClassNames(
          "duration-300 ease-in-out group-hover:opacity-75 rounded-md",
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        )}
      />
      <div className="w-full px-2 pt-3 text-center">
        <h2 className="text-base font-bold">{title}</h2>
        <p className="text-sm font-light">{description}</p>
        <Button className="w-full mt-2">{"Visit"}</Button>
      </div>
    </div>
  );
};

export default ProjectCard;
