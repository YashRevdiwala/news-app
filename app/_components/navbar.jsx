import { Search } from "./search"

export const NavBar = () => {
  return (
    <div className="mx-10 flex items-center justify-between px-64 py-10">
      <h1 className="px-64 text-3xl font-bold text-gray-500">The News Bugle</h1>
      <Search />
    </div>
  )
}
