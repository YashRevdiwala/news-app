import { Search } from "./search"

export const NavBar = () => {
  return (
    <div className="mx-auto flex flex-col items-start justify-center gap-4 px-7 py-10 sm:flex-row sm:items-center sm:justify-between">
      <h1 className="text-3xl font-bold text-gray-500">The News Bugle</h1>
      <Search />
    </div>
  )
}
