import { useState } from 'react'
import loadingSVG from './loading.svg'

let setLoadingVisible = (visible: boolean) => {}
export const Loading = () => {
  const [visible, setVisible] = useState(false)
  setLoadingVisible = setVisible

  if (!visible) {
    return null
  }

  return (
    <div style={{ width: '100%', height: '100%', textAlign: 'center' }}>
      <img alt="" src={loadingSVG} />
    </div>
  )
}

Loading.show = () => {
  setLoadingVisible(true)
}

Loading.hide = () => {
  setLoadingVisible(false)
}
