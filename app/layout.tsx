import Providers from "./utils/QueryProvider";
import getQueryClient from "./utils/getQueryClient";
import Hydrate from "./utils/HydrateClient";
import { dehydrate } from "@tanstack/query-core";
import Header from "./components/Header";
import { Roboto } from "next/font/google";
import { Button } from "./components/Button";
import "./globals.css";
import supabaseAdmin from "./utils/supabaseAdmin";

const roboto = Roboto({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Greetings, Fellow earthling!",
  description: "Instagram wasn't enough ;-)",
};

export const getPhotos = async () => {
  // const posts = await fetch('https://jsonplaceholder.typicode.com/photos');
  // return await posts.json();

  return await supabaseAdmin.from('portfolio-data').select();
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const queryClient = getQueryClient()
  await queryClient.prefetchQuery(['photos'], getPhotos);
  const dehydratedState = dehydrate(queryClient);

  return (
    <html lang="en">
      <body className={roboto.className}>
        <Providers>
          <Header />
          <main className="max-w-6xl flex flex-col mx-auto mt-72 items-center justify-center">
            <div className="flex">
              <Button>Gallery</Button>
              <Button>Projects</Button>
              <Button>Resume</Button>
              <Button>Contact</Button>
            </div>
            <Hydrate state={dehydratedState}>
              {children}
            </Hydrate>
          </main>
        </Providers>
      </body>
    </html>
  );
}
