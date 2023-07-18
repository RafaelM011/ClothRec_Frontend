import { useState } from 'react'

function App (): JSX.Element {
  const [imgInput, setImgInput] = useState<string>()
  const [hidden, setHidden] = useState('hidden')
  const [regions, setRegions] = useState()

  const handleRequest = (): void => {
    fetch('http://127.0.0.1:4000/getImageData', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ IMAGE_URL: imgInput })
    })
      .then(async res => await res.json())
      .then(data => {
        const dataRegions = data.outputs[0].data.regions
        setRegions(dataRegions)
      })
      .catch(err => { console.log(err) })
  }

  console.log(regions)

  return (
    <div className="w-full h-fit min-h-[100vh] bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center">
      <div>

      </div>
      <div className="w-8/12 max-w-[450px] h-fit mt-[30vh]">
        <div className="w-full rounded-full py-2 px-8 bg-gradient-to-r from-fuchsia-500 to-violet-500 flex gap-2">
          <input className="w-full my-4 outline-none" onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setImgInput(event.target.value) }}/>
          <button
            className="rounded-full text-xl font-semibold px-4 h-fit my-auto shadow-[0px_0px_4px_2px_rgba(0,0,0,0.3)] hover:scale-110 active:scale-90"
            onClick={handleRequest}
          >
          Load
          </button>
        </div>
        <div className="my-4">
          <img className={`${hidden}`} src={imgInput} alt="recog-img" onLoad={() => { setHidden('block') }} onError={() => { setHidden('hidden') }}/>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default App
