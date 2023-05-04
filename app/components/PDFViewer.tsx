"use client";
import React, { useEffect, useRef, useState } from "react";
import { DivProps } from "react-html-props";
import useGetResumeArtifacts from "../hooks/useGetResumeArtifacts";
import Button from "./Button";
import { HiOutlineDownload } from "react-icons/hi";
import { resumeObjects } from "../types/resumeObjects";

interface PDFProps extends DivProps {
  resumeData: unknown[];
}

const PDFViewer = ({ children, className, resumeData, ...rest }: PDFProps) => {
  const { img, pdf } = useGetResumeArtifacts(resumeData as resumeObjects[]);
  const [href, setHref] = useState("");

  useEffect(() => {
    if (pdf != null) {
      fetch(pdf)
        .then((res) => res.blob())
        .then((res) => {
          let tempHref = URL.createObjectURL(res);
          setHref(tempHref);
        });
    }
  }, [pdf]);

  return (
    <div
      className={`flex flex-col justify-center items-center w-full md:w-5/6 mx-auto ${className}`}>
      <div className="flex justify-center items-center w-full h-auto mx-auto aspect-[8.5/11]">
        <img src={img} className="max-w-full h-auto shadow-lg" alt="resume" />
      </div>
      <Button className="max-w-sm mt-4">
        <a
          href={href}
          className="no-underline flex items-center space-x-2"
          download="resume_sanjay"
          target="_blank">
          Download PDF <HiOutlineDownload />
        </a>
      </Button>
    </div>
  );
};

export default PDFViewer;
