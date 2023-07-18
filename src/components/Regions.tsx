import { type Data } from '../type'

interface Props {
  regions: Data[]
}

export const Regions: React.FC<Props> = ({ regions }): JSX.Element => {
  return (
    <div className='bg-white h-fit w-2/12 mt-[30vh]'>
      <h1 className='text-xl font-semibold text-center'> Regions found </h1>
      <ul>
        { regions.map(region => {
          const { id } = region
          console.log(region)
          return (
            <li key={id}> hi </li>
          )
        })}
      </ul>
    </div>
  )
}
