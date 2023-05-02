"use client";

import { useState } from "react";
import PhotoGrid from "./components/PhotoGrid";
import { useQuery } from "@tanstack/react-query";
import { getPhotos, getProjects } from "./utils/apiFunctions";
import PDFViewer from "./components/PDFViewer";
import Button from "./components/Button";
import { MenuOptions } from "./types/options";

export default function Home() {
  const { data: photos, isLoading: isLoadingPhotos } = useQuery({
    queryKey: ["photos"],
    queryFn: getPhotos,
  });

  const { data: projects, isLoading: isLoadingProjects } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  const [option, setOption] = useState<MenuOptions>(MenuOptions.gallery);

  return (
    <>
      <div className="w-5/6 mx-4 flex flex-wrap justify-center mt-4 md:mt-2 lg:mt-0">
        <Button onClick={() => setOption(MenuOptions.gallery)}>Gallery</Button>
        <Button onClick={() => setOption(MenuOptions.projects)}>
          Projects
        </Button>
        <Button onClick={() => setOption(MenuOptions.resume)}>Resume</Button>
        <Button onClick={() => setOption(MenuOptions.contact)}>Contact</Button>
      </div>
      <div className="w-full mx-auto sm:px-24 md:px-20 lg:px-16 mb-8 justify-center">
        {photos && (
          <PhotoGrid
            className={` ${
              option === MenuOptions.gallery ? "" : "hidden"
            } w-full mt-8`}
            data={photos.slice(0, 8)}
          />
        )}
        {projects && (
          <PhotoGrid
            imgClassName="w-80 h-56 rounded-md overflow-hidden"
            className={` ${
              option === MenuOptions.projects ? "" : "hidden"
            } w-full mt-8`}
            data={projects.slice(0, 8)}
          />
        )}
        <PDFViewer
          className={`${option === MenuOptions.resume ? "" : "hidden"}`}
        />
        <h2 className="text-bold font-sm mt-6 text-center">
          {" "}
          Website under development, cooler updates rolling soon.
        </h2>
      </div>
    </>
  );
}
