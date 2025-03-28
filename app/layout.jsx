import { Inter } from "next/font/google"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { NavBar } from "./_components/navbar"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "News Bugle",
  description: "Your own daily news express",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={(inter.className, "dark:bg-[#242424]")}>
        <div className="mx-auto max-w-7xl">
          <NavBar />
          {children}
          <SpeedInsights />
        </div>
      </body>
    </html>
  )
}
