import { useState } from "react"

function App() {
  const [imgInput, setImgInput] = useState<string>()
  const [ hidden, setHidden] = useState("hidden")

  return (
    <div className="w-full h-fit min-h-[100vh] bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center">
      <div>

      </div>
      <div className="w-8/12 max-w-[450px] h-fit mt-[30vh]">
        <div className="w-full rounded-full py-2 px-8 bg-gradient-to-r from-fuchsia-500 to-violet-500">
          <input className="w-full my-4 outline-none" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setImgInput(event.target.value)}/>
        </div>
        <div className="my-4">
          <img className={`${hidden}`} src={imgInput} alt="recog-img" onLoad={() => setHidden("block")} onError={() => setHidden("hidden")}/>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default App
