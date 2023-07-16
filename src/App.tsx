import { useState } from "react"

function App() {
  const [imgInput, setImgInput] = useState<string>()

  return (
    <div className="w-full h-[100vh] bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center items-center">
      <div className="w-4/12">
        <div className="w-full rounded-full py-2 px-8 bg-gradient-to-r from-fuchsia-500 to-violet-500">
          <input className="w-full my-4 outline-none" onChange={(event: React.ChangeEvent<HTMLInputElement>) => setImgInput(event.target.value)}/>
        </div>
        <img src={imgInput} alt="recog-img"/>
      </div>
    </div>
  )
}

export default App
