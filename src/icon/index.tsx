import { CSSProperties } from 'react'
import './font.css'

interface IconProps {
  className?: string
  fontSize?: string
  color?: string
  style?: CSSProperties
}

const CommonIcon =
  (iconName: string) =>
  ({ className, fontSize, color, style }: IconProps) =>
    <i style={{ color, fontSize, ...style }} className={`Icon ${iconName} ${className} `} />
export const IconAddFile = CommonIcon('IconAddFile')
export const IconArrowDown = CommonIcon('IconArrowDown')
export const IconEmail = CommonIcon('IconEmail')
export const IconTask = CommonIcon('IconTask')
