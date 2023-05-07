"use client";

import { useState } from "react";
import PhotoGrid from "./components/PhotoGrid";
import { useQuery } from "@tanstack/react-query";
import { getPhotos, getProjects, getResume } from "./utils/apiFunctions";
import PDFViewer from "./components/PDFViewer";
import Button from "./components/Button";
import { MenuOptions } from "./types/options";
import Contact from "./components/Contact";
import GalleryImage from "./components/GalleryImage";
import { Photo } from "./types/photo";
import ProjectCard from "./components/ProjectCard";
import { Project } from "./types/project";
import HeroCard from "./components/HeroCard";

export default function Home() {
  const { data: photos, isLoading: isLoadingPhotos } = useQuery({
    queryKey: ["photos"],
    queryFn: getPhotos,
  });

  const { data: projects, isLoading: isLoadingProjects } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  const { data: resume, isLoading: isLoadingResume } = useQuery({
    queryKey: ["resume"],
    queryFn: getResume,
  });

  const [option, setOption] = useState<MenuOptions>(MenuOptions.gallery);

  return (
    <>
      <HeroCard />
      <div className="w-5/6 mx-4 flex flex-wrap justify-center mt-4">
        <Button onClick={() => setOption(MenuOptions.gallery)}>Gallery</Button>
        <Button onClick={() => setOption(MenuOptions.projects)}>
          Projects
        </Button>
        <Button onClick={() => setOption(MenuOptions.resume)}>Resume</Button>
        <Button onClick={() => setOption(MenuOptions.contact)}>Contact</Button>
      </div>
      <div className="w-5/6 max-w-7xl xl:px-36 2xl:px-48 mx-auto mb-8 justify-center">
        <PhotoGrid
          className={` ${
            option === MenuOptions.gallery ? "" : "hidden"
          } w-full mt-4`}>
          {(photos as Photo[])?.map((img) => {
            return (
              <GalleryImage
                key={img.id}
                id={img.id}
                title={img.title}
                href={img.href}
                blurVersion={img.blurVersion}
              />
            );
          })}
        </PhotoGrid>

        <PhotoGrid
          className={`grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ${
            option === MenuOptions.projects ? "" : "hidden"
          } w-full mt-4`}>
          {(projects as Project[])?.map((project: Project) => {
            return (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                preview={project.preview}
                href={project.href}
                blurVersion={project.blurVersion}
                description={project.description}
              />
            );
          })}
        </PhotoGrid>

        <PDFViewer
          resumeData={resume || []}
          className={`${option === MenuOptions.resume ? "" : "hidden"}`}
        />

        <Contact
          className={`${option === MenuOptions.contact ? "" : "hidden"}`}
        />
        <h2 className="text-bold font-sm mt-6 text-center">
          {" "}
          Website under development, cooler updates rolling out soon!
        </h2>
      </div>
    </>
  );
}
