"use client"

import { Inter } from "next/font/google"
import Provider from "./provider"
import Navbar from "@/components/navbar"
import dynamic from 'next/dynamic'
import VoxelDogLoader from '@/components/three/voxel-dog-loader'

const LazyVoxelDog = dynamic(() => import('@/components/three/voxel-dog'), {
  ssr: false,
  loading: () => <VoxelDogLoader />
})

// const inter = Inter({ subsets: ["greek"], display: "swap" })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body>
        <Provider>
          <Navbar />
          <LazyVoxelDog />
          {children}
        </Provider>
      </body>
    </html>
  )
}
