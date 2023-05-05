import { DivProps } from "react-html-props";

type Photo = {
  id: number;
  title: string;
  href: string;
  preview: string;
};

const PhotoGrid = ({ className, children, ...rest }: DivProps) => {
  return (
    <div
      className={`grid mx-auto grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-6 place-items-center ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export default PhotoGrid;
