import { resumeObjects } from "../types/resumeObjects";
const useGetResumeArtifacts = (data: resumeObjects[]) => {
  const imgs = data.filter((record) => record.type === "img");
  const pdfs = data.filter((record) => record.type === "pdf");

  return imgs?.[0]?.fileName?.toLowerCase() ===
    pdfs?.[0]?.fileName?.toLowerCase()
    ? { img: imgs[0]?.href, pdf: pdfs[0]?.href }
    : { img: "", pdf: "" };
};

export default useGetResumeArtifacts;
