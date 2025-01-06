"use client"

import { Inter } from "next/font/google"
import Provider from "./provider"
import Navbar from "@/components/navbar"
import dynamic from 'next/dynamic'
import IslandLoader from '@/components/three/island-loader'

const LazyIsland = dynamic(() => import('@/components/three/island'), {
  ssr: false,
  loading: () => <IslandLoader />
})

// const inter = Inter({ subsets: ["greek"], display: "swap" })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body>
        <Provider>
          <Navbar />
          <LazyIsland />
          {children}
        </Provider>
      </body>
    </html>
  )
}
