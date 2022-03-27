import { useState } from 'react'

import { userApi, UpdateUserRequest, Gender } from '@/apis'

export const FormTest = () => {
  const [updateUserRequest, setUpdateUserRequest] = useState<UpdateUserRequest>({
    name: '',
    gender: 'Female'
  })

  const submit = () => {
    userApi.update(updateUserRequest)
  }

  return (
    <div>
      <input
        value={updateUserRequest.name}
        onChange={evt => setUpdateUserRequest({ ...updateUserRequest, name: evt.target.value })}
      />
      <select
        value={updateUserRequest.gender}
        onChange={evt =>
          setUpdateUserRequest({ ...updateUserRequest, gender: evt.target.value as Gender })
        }
      >
        <option value="Male">男</option>
        <option value="Female">女</option>
      </select>
      <button onClick={submit}>提交</button>
    </div>
  )
}
