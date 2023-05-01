import { DivProps } from "react-html-props";

type Photo = {
  id: number;
  title: string;
  href: string;
  preview: string;
};

interface PhotoGridProps extends DivProps {
  data: unknown[];
  imgClassName?: string;
}

const PhotoGrid = ({
  className,
  imgClassName,
  data,
  children,
  ...rest
}: PhotoGridProps) => {
  return (
    <div
      className={`grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 place-items-center ${className}`}
      {...rest}>
      {(data as Photo[]).slice(0, 8).map((img: Photo) => {
        return (
          <div
            key={img.id}
            className={`h-80 w-60 flex justify-center mx-4 ${imgClassName}`}>
            <img
              className="h-full w-full object-cover"
              src={img.href || img.preview}
              alt="img"
            />
          </div>
        );
      })}
      {children}
    </div>
  );
};

export default PhotoGrid;
