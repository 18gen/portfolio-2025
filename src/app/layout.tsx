"use client";

import "./globals.css";
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <title>Gen Ichihashi - Portfolio</title>
        <meta
          name="description"
          content="Gen Ichihashi - Full-Stack Developer based in Canada/Japan. Computer Science at University of Waterloo."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Gen Ichihashi - Portfolio" />
        <meta
          property="og:description"
          content="Full-Stack Developer based in Canada/Japan. Computer Science at University of Waterloo."
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </head>
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
