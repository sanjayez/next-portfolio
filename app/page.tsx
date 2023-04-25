import { Roboto } from "next/font/google";
import PhotoGrid from "./components/PhotoGrid";
const roboto = Roboto({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="w-full mx-auto px-20 mb-8">
      <PhotoGrid />
    </div>
  );
}
