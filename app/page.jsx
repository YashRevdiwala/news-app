import axios from "axios"
import { Article } from "./_components/article"

export default async function Home() {
  const fetchNews = await axios.get(process.env.NEWS_API)
  const newsWithImages = fetchNews.data.data.filter((imageData) => {
    return imageData.image !== null
  })
  const newsWithoutImages = fetchNews.data.data.filter((imageData) => {
    return imageData.image === null
  })
  const newsData = newsWithImages.concat(newsWithoutImages)

  return (
    <div className="mx-10 grid max-w-screen-2xl grid-cols-4 gap-4">
      {newsData?.map((newsData, i) => {
        return <Article key={i} data={newsData} />
      })}
    </div>
  )
}
