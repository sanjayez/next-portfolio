import Image from "next/image";
import { Photo } from "../types/photo";

const GalleryImage = ({ title, href, blurVersion }: Photo) => {
  return (
    <div className={`h-80 w-60 md:w-full flex justify-center overflow-hidden`}>
      <Image
        src={href}
        alt={title}
        blurDataURL={blurVersion}
        placeholder="blur"
        width={400}
        height={500}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </div>
  );
};

export default GalleryImage;
