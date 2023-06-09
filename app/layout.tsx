import Providers from "./utils/QueryProvider";
import getQueryClient from "./utils/getQueryClient";
import Hydrate from "./utils/HydrateClient";
import { dehydrate } from "@tanstack/query-core";
import Header from "./components/Header";
import { Roboto } from "next/font/google";
import "./globals.css";
import { getPhotos } from "./utils/apiFunctions";

const roboto = Roboto({
  weight: ["100", "300", "500", "700"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Welcome!",
  description: `sanjay's portfolio`,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery(["photos"], getPhotos);
  const dehydratedState = dehydrate(queryClient);

  return (
    <html lang="en">
      <body className={`relative ${roboto.className}`}>
        <Providers>
          <Header />
          <main className="absolute w-full flex flex-col mx-auto top-72 right-1/2 translate-x-1/2 items-center justify-center">
            <Hydrate state={dehydratedState}>{children}</Hydrate>
          </main>
        </Providers>
      </body>
    </html>
  );
}
