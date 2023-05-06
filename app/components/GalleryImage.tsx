import React from "react";
import Image from "next/image";
import { Photo } from "../types/photo";
import { getClassNames } from "../utils/getClassNames";

const GalleryImage = ({ title, href, blurVersion }: Photo) => {
  const [isLoading, setLoading] = React.useState(true);

  return (
    <div
      className={`h-80 w-60 md:w-full flex justify-center rounded-sm overflow-hidden`}>
      <Image
        src={href}
        alt={title}
        blurDataURL={blurVersion}
        placeholder="blur"
        width={360}
        height={480}
        style={{
          maxWidth: "100%",
          height: "auto",
          objectFit: "cover",
        }}
        className={getClassNames(
          "duration-300 ease-in-out group-hover:opacity-75",
          isLoading
            ? "scale-110 blur-2xl grayscale"
            : "scale-100 blur-0 grayscale-0"
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};

export default GalleryImage;
