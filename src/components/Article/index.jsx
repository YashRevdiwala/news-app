/* eslint-disable react/prop-types */
const Article = ({ data }) => {
  return (
    <article className="relative pt-5 px-5 rounded-md">
      <img
        src={data.image_url}
        alt={data.title}
        className="w-fit ml-auto mr-auto block"
      />
      <h2 className="text-center font-bold pt-3">{data.title}</h2>
      <p className="w-10 text-end">~{data.source_id.toUpperCase()}</p>
    </article>
  )
}

export default Article
