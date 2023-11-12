import { SyncLoader } from "react-spinners"

const Loader = () => {
  return (
    <div className="h-[70vh] flex flex-col justify-center items-center">
      <SyncLoader size={10} color="black" speedMultiplier={0.5} />
    </div>
  )
}

export default Loader
