import axios from "axios"

import { Article } from "./_components/article"

export default async function Home() {
  const fetchNews = await axios
    .get(process.env.NEWS_API)
    .then((res) => res.data.data)
    .catch((err) => console.log(err))

  return (
    <div className="grid grid-cols-1 gap-4 px-6 py-10 dark:text-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {fetchNews?.map((newsData, i) => {
        return <Article key={i} data={newsData} />
      })}
    </div>
  )
}
