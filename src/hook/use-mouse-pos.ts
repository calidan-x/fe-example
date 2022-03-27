import { useEffect, useState } from 'react'

export const useMousePos = () => {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>()

  const moveEvent = (evt: MouseEvent) => {
    setMousePos({ x: evt.clientX, y: evt.clientY })
  }

  useEffect(() => {
    document.addEventListener('mousemove', moveEvent)
    return () => {
      document.removeEventListener('mousemove', moveEvent)
    }
  }, [])

  return mousePos
}
