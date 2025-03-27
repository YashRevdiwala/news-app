"use client"
import { Input } from "@/components/ui/input"
import { SearchIcon } from "lucide-react"
import { useRouter } from "next/navigation"

export const Search = () => {
  const router = useRouter()
  return (
    <div className="relative flex items-center gap-2 rounded-lg p-2">
      <Input
        type="text"
        placeholder="Search"
        className="w-50 rounded-md"
        onKeyDown={(e) =>
          e.key === "Enter" && router.push(`/search/${e.target.value}`)
        }
      />

      <span className="absolute right-3">
        <SearchIcon />
      </span>
    </div>
  )
}
