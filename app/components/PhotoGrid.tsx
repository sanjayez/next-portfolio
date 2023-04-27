import { DivProps } from "react-html-props";

type Photo = {
  albumId: number;
  id: number;
  title: string;
  href: string;
  thumbnailUrl: string;
}

interface PhotoGridProps extends DivProps {
  data: unknown[]
}

const PhotoGrid = ({ className, data, children, ...rest }: PhotoGridProps) => {

  return (
    <div className={`grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 place-items-center ${className}`} {...rest}>
      {(data as Photo[]).slice(0, 8).map((img: Photo) => {
        return (
          <div key={img.id} className="h-80">
            <img className="h-full object-cover" src={img.href} alt="img" />
          </div>
        )
      })}
      {children}
    </div>
  );
};

export default PhotoGrid;
