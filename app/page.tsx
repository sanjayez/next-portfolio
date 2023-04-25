"use client"
import { Roboto } from "next/font/google";
import PhotoGrid from "./components/PhotoGrid";
import { useQuery } from "@tanstack/react-query";

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

const getPhotos = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/photos');
  return await data.json()
}

export default function Home() {

  const { data, isLoading } = useQuery({ queryKey: ['photos'], queryFn: getPhotos });

  return (
    <div className="w-full mx-auto px-20 mb-8">
      <PhotoGrid className="w-full mt-8" data={data.slice(0, 8)} />
    </div>
  );
}
