import { useEffect, useState } from 'react'
import './switch.css'

interface Props {
  value?: boolean
  defaultValue?: boolean
  onValueChange?: (value: boolean) => void
}

export const Switch = ({ value, defaultValue, onValueChange }: Props) => {
  return (
    <div
      className="switch-wrap"
      onClick={() => {
        onValueChange && onValueChange(!value)
      }}
    >
      <div className="switch-toggle" style={{ marginLeft: value ? '40px' : '' }} />
    </div>
  )
}

// export const Switch = ({ value, defaultValue, onValueChange }: Props) => {
//   const [enable, setEnable] = useState(value || defaultValue || false)

//   useEffect(() => {
//     if (value !== undefined) {
//       setEnable(value)
//     }
//   }, [value])

//   return (
//     <div
//       className="switch-wrap"
//       onClick={() => {
//         setEnable(!enable)
//         onValueChange && onValueChange(!enable)
//       }}
//     >
//       <div className="switch-toggle" style={{ marginLeft: enable ? '40px' : '' }} />
//     </div>
//   )
// }
