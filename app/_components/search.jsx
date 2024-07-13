"use client"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"

export const Search = () => {
  const router = useRouter()
  return (
    <Input
      type="text"
      placeholder="Search"
      className="w-50"
      onKeyDown={(e) =>
        e.key === "Enter" && router.push(`/search/${e.target.value}`)
      }
    />
  )
}
