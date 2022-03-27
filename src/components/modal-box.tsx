// 这是一种简单写法，但是这么写最后代码上处理会变得复杂
// 更好的写法看 modal.tsx

import { ReactNode } from 'react'

interface Props {
  visible: boolean
  children: ReactNode
}
export const ModalBox = ({ visible, children }: Props) => {
  if (!visible) {
    return null
  }
  return (
    <div
      style={{
        top: 0,
        left: 0,
        position: 'fixed',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.2)'
      }}
    >
      <div style={{ backgroundColor: 'white', width: '300px', height: '200px' }}>{children}</div>
    </div>
  )
}
