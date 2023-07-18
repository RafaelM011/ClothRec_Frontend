import { type Data } from '../type'

interface Props {
  regions: Data[]
}

export const Regions: React.FC<Props> = ({ regions }): JSX.Element => {
  return (
    <div className='h-fit w-3/12 max-w-[200px] mt-[30vh] py-4 px-2 border-violet-500 border-r-4 border-b-4 rounded-3xl'>
      <h1 className='text-xl font-semibold text-center text-white mb-4'> Regions found </h1>
      <ul>
        { regions.map(region => {
          const { id, data, value } = region
          const { concepts } = data
          return (
            <li key={id} className='flex gap-2'>
              <input type='checkBox'/>
              <span className='text-lg font-medium text-white'> {concepts[0].name} </span>
              <span className='grow text-end text-lg font-medium text-white'> {Math.floor(value * 100)}% </span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
