import { Inter } from "next/font/google"
import Provider from "./provider"
import Navbar from "@/components/navbar"

// const inter = Inter({ subsets: ["greek"], display: "swap" })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body>
        <Provider>
          <Navbar />
          {children}
        </Provider>
      </body>
    </html>
  )
}
