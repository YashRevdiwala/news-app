import { Inter } from "next/font/google"
import "./globals.css"
import { NavBar } from "./_components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "News Bugle",
  description: "Your own daily news express",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={(inter.className, "dark:bg-[#242424]")}>
        <NavBar />
        {children}
      </body>
    </html>
  )
}
