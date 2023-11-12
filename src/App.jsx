/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import "./App.css"
import axios from "axios"
import { useState } from "react"
import Loader from "./components/Loader"

function App() {
  const [newsData, setNewsData] = useState([])
  const [errorLog, setErrorLog] = useState([])
  const [loading, setLoading] = useState(true)
  const getNews = async () => {
    await axios
      .get(
        `https://newsdata.io/api/1/news?apikey=${
          import.meta.env.VITE_MEDIASTACK_API_TOKEN
        }&country=in&language=en`
      )
      .then((response) => {
        console.log(response.data)
        setNewsData(response.data.results)
        setLoading(false)
      })
      .catch((error) => {
        console.log(error.response)
        setErrorLog(error.response.data.results)
        setLoading(false)
      })
  }

  getNews()

  return loading ? (
    <Loader />
  ) : (
    <>
      <h1 className="text-3xl font-bold underline">The News Bugle</h1>
      {newsData.map((data) => {
        return (
          <article key={data.article_id}>
            <h1>1</h1>
          </article>
        )
      })}
    </>
  )
}

export default App
