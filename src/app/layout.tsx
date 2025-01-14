"use client";

import Provider from "./provider";
import Navbar from "@/components/navbar";
import dynamic from "next/dynamic";
import IslandLoader from "@/components/three/island-loader";
import Footer from "@/components/footer";
const LazyIsland = dynamic(() => import("@/components/three/island"), {
  ssr: false,
  loading: () => <IslandLoader />,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body>
        <Provider>
          <Navbar />
          <LazyIsland />
          {children}
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
