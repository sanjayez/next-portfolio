import { Roboto } from "next/font/google";
import { Button } from "./components/Button";
const roboto = Roboto({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
});

export default function Home() {
  return <div className="">page</div>;
}
