import React from "react";
import { IFrameProps } from "react-html-props";

const pdfStyles = {
  width: "calc(60vw - 18px)!important",
  height: "auto!important",
  aspectRatio: "8.5/11",
};

const PDFViewer = ({ children, className, ...rest }: IFrameProps) => {
  return (
    <iframe
      src="https://res.cloudinary.com/dh97p0mvg/image/upload/v1682946981/resume_sanjay_Feb_07.pdf#view=FitV"
      className={`w-full mx-auto ${className}`}
      height="auto"
      style={pdfStyles}>
      {children}
    </iframe>
  );
};

export default PDFViewer;
