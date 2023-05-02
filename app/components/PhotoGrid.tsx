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
      className={`grid mx-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-6 place-items-center ${className}`}
      {...rest}>
      {(data as Photo[]).slice(0, 8).map((img: Photo) => {
        return (
          <div
            key={img.id}
            className={`h-80 flex justify-center overflow-hidden ${imgClassName}`}>
            <img
              className="h-full object-cover"
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
