"use client";

import { useState } from "react";
import PhotoGrid from "./components/PhotoGrid";
import { useQuery } from "@tanstack/react-query";
import { getPhotos, getProjects } from "./utils/apiFunctions";
import PDFViewer from "./components/PDFViewer";
import Button from "./components/Button";
import { MenuOptions } from "./types/options";
import Contact from "./components/Contact";

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
      <div className="w-full md:w-full flex flex-col items-center">
        <div className="w-40 h-40 overflow-hidden rounded-full border border-4 border-white border-solid">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&dpr=2"
            alt="hero-profile"
          />
        </div>
        <h2 className="text-3xl font-bold block text-center mt-2 subpixel-antialiased">
          Sanjay S
        </h2>
        <p className="text-sm lg:text-base font-light mt-2">
          Adventurer, Dreamer, builder! ✌
        </p>
        <p className="text-sm lg:text-base font-light mt-2 mx-10 md:mx-8 lg:mx-6 text-center">
          Hello! I am a Full stack software engineer focused on front-end with
          3+ years of experience in building for the web.
          <br /> Outside of work I love adventure sports, travelling and trying
          the new sushi place in town.
          <br /> Why this page you ask? because Instagram wasn&apos;t enough 😂
        </p>
      </div>
      <div className="w-5/6 mx-4 flex flex-wrap justify-center mt-4">
        <Button onClick={() => setOption(MenuOptions.gallery)}>Gallery</Button>
        <Button onClick={() => setOption(MenuOptions.projects)}>
          Projects
        </Button>
        <Button onClick={() => setOption(MenuOptions.resume)}>Resume</Button>
        <Button onClick={() => setOption(MenuOptions.contact)}>Contact</Button>
      </div>
      <div className="w-5/6 max-w-7xl xl:px-36 2xl:px-48 mx-auto mb-8 justify-center">
        {photos && (
          <PhotoGrid
            className={` ${
              option === MenuOptions.gallery ? "" : "hidden"
            } w-full mt-4`}
            data={photos.slice(0, 8)}
          />
        )}
        {projects && (
          <PhotoGrid
            imgClassName="max-w-xs h-auto rounded-md overflow-hidden"
            className={`grid-cols-1 md:grid-cols-3 lg:grid-cols-3 ${
              option === MenuOptions.projects ? "" : "hidden"
            } w-full mt-4`}
            data={projects.slice(0, 8)}
          />
        )}
        <PDFViewer
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
