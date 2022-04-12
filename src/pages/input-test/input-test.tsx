import { useState } from 'react'

import { Input } from '@/components'

export const InputTest = () => {
  const [text, setText] = useState('')
  return (
    <div>
      <input value="没法改变的文字" />
      <Input value={text} onValueChange={setText} />
    </div>
  )
}
