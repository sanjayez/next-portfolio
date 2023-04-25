import { Button } from "./components/Button";
import "./globals.css";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Greetings, Fellow earthling!",
  description: "Instagram wasn't enough ;-)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <header className="min-w-screen relative h-80 bg-red-400">
          <img
            className="w-full h-80 object-cover blur-sm"
            src="https://images.pexels.com/photos/6040547/pexels-photo-6040547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <div className="absolute -bottom-20 right-1/2 w-40 h-40 bg-blue-200 translate-x-1/2 overflow-hidden rounded-full border border-white border-solid border-8">
            <img
              src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&w=300&h=150&dpr=2"
              alt="hero-profile"
            />
          </div>
        </header>
        <main className="w-5/6 flex flex-col mx-auto mt-24 items-center justify-center">
          <div className="flex">
            <Button>Gallery</Button>
            <Button>Projects</Button>
            <Button>Resume</Button>
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
