/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import "./App.css"
import { useState, useEffect } from "react"
import axios from "axios"
import Loader from "./components/Loader"
import Article from "./components/Article"
import NavBar from "./components/Navbar"

function App() {
  const [newsData, setNewsData] = useState([])
  const [errorLog, setErrorLog] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getNews()
  }, [])

  const getNews = async () => {
    await axios
      .get(
        `https://newsdata.io/api/1/news?apikey=${
          import.meta.env.VITE_NEWSDATA_API_TOKEN
        }&country=in&image=1`
      )
      .then((data) => {
        console.log(data.data.results)
        setNewsData(data.data.results)
        setLoading(false)
      })
      .catch((error) => {
        console.error(error)
        setErrorLog(error)
        setLoading(false)
      })
  }

  return loading ? (
    <Loader />
  ) : (
    <>
      <NavBar />
      <div className="grid grid-cols-4 gap-4 items-start w-full px-10">
        {newsData.map((data) => {
          return <Article data={data} key={data.article_id} />
        })}
      </div>
    </>
  )
}

export default App
