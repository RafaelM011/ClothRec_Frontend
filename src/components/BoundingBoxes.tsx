import { type Data } from '../type'

interface Props {
  regions: Data[]
}

export const BoundingBoxes: React.FC<Props> = ({ regions }): JSX.Element => {
  return (
    <>
      {regions.map(region => {
        const element = region.region_info.bounding_box
        const { top_row, left_col, bottom_row, right_col } = element
        const width = Math.trunc(450 * (right_col - left_col))
        const height = Math.trunc(327 * (bottom_row - top_row))
        const top = Math.trunc(327 * top_row)
        const left = Math.trunc(450 * left_col)

        const myStyle = {
          width: width.toString() + 'px',
          height: height.toString() + 'px',
          top: top.toString() + 'px',
          left: left.toString() + 'px'
        }

        return (
          <div key={region.id} className='absolute border-green-400 border-2' style={myStyle}>
          </div>
        )
      })}
    </>
  )
}
