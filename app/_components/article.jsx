import { TimeAgo } from "./time"

export const Article = ({ data }) => {
  return (
    <div className="rounded-lg bg-[#e2e8f0] dark:bg-[#1e293b]">
      {data.image !== null && (
        <img src={data.image} alt={data.title} className="rounded-md" />
      )}
      <div className="p-5">
        <h2 className="font-semibold">{data.title}</h2>
        <p className="py-2 text-sm">{data.description}</p>
        <p className="pt-2 text-end text-xs italic">
          {data.source.toUpperCase()} <TimeAgo date={data.published_at} />{" "}
        </p>
      </div>
    </div>
  )
}
