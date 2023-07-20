import { useState } from 'react'
import { Regions } from './components/Regions'
import { type Data } from './type'
import { BoundingBoxes } from './components/BoundingBoxes'

function App (): JSX.Element {
  const [imgInput, setImgInput] = useState<string>()
  const [hidden, setHidden] = useState('hidden')
  const [regions, setRegions] = useState<Data[]>([])

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

  return (
    <main className="w-full h-fit min-h-[100vh] bg-gradient-to-r from-violet-500 to-fuchsia-500 flex justify-center gap-4">
      <section className="w-8/12 max-w-[450px] h-fit mt-[30vh]">
        <div className="w-full rounded-full py-2 px-8 bg-gradient-to-r from-fuchsia-500 to-violet-500 flex gap-2">
          <input className="w-full my-4 outline-none" onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setImgInput(event.target.value) }}/>
          <button
            className="rounded-full text-xl font-semibold px-4 h-fit my-auto shadow-[0px_0px_4px_2px_rgba(0,0,0,0.3)] hover:scale-110 active:scale-90"
            onClick={handleRequest}
          >
          Load
          </button>
        </div>
        <div className="my-4 relative h-fit w-fit">
          <img className={`${hidden}`} src={imgInput} alt="recog-img" onLoad={() => { setHidden('block') }} onError={() => { setHidden('hidden') }}/>
          {regions.map(region => {
            const element = region.region_info.bounding_box
            const { top_row, left_col, bottom_row, right_col } = element
            const width = `w-[${Math.trunc(450 * (right_col - left_col))}px]`
            const height = `h-[${Math.trunc(327 * (bottom_row - top_row))}px]`
            const top = `top-[${Math.trunc(327 * top_row)}px]`
            const left = `left-[${Math.trunc(450 * left_col)}px]`
            return (
              <BoundingBoxes key={region.id} width={width} height={height} top={top} left={left}/>
            )
          })}
        </div>
      </section>
      <Regions regions={regions}/>
    </main>
  )
}

export default App
