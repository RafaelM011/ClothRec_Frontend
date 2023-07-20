import { useState } from 'react'

interface Props {
  key: string
  width: string
  height: string
  top: string
  left: string
}

export const BoundingBoxes: React.FC<Props> = ({ key, width, height, top, left }): JSX.Element => {
  const [widthClass] = useState(width)
  const [heightClass] = useState(height)
  const [topClass] = useState(top)
  const [leftClass] = useState(left)

  console.log(widthClass)
  return (
      <div key={key} className={`${widthClass} ${heightClass} ${topClass} ${leftClass} border-green-400 border-2`}>
      </div>
  )
}
