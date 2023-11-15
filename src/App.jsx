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
        }&country=in`
      )
      .then((data) => {
        console.log(data.data.data)
        setNewsData(data.data.data)
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
        {newsData.map((data, i) => {
          return <Article data={data} key={i} />
        })}
      </div>
    </>
  )
}

export default App
