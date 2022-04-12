import { useState } from 'react'

import { Switch } from '@/components'

export const SwitchTest = () => {
  const [enable, setEnable] = useState(false)

  return (
    <div>
      <Switch value={enable} onValueChange={setEnable} />
    </div>
  )
}
