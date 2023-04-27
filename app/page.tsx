"use client"
import { Roboto } from "next/font/google";
import PhotoGrid from "./components/PhotoGrid";
import { useQuery } from "@tanstack/react-query";
import { getPhotos } from "./layout";

const roboto = Roboto({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
});

type PhotoProp = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export default async function Home() {

  const { data, isLoading } = useQuery({ queryKey: ['photos'], queryFn: getPhotos });
  return (
    <div className="w-full mx-auto sm:px-24 md:px-20 lg:px-16 mb-8">
      <PhotoGrid className="w-full mt-8" data={data.slice(0, 8)} />
    </div>
  );
}
