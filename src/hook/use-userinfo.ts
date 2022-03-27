/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react'

import { request } from '@/utils/request'

interface UserInfo {
  id: number
  name: string
  avatar: string
}

let _userInfo: UserInfo = { id: 0, name: '', avatar: '' }
export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>(_userInfo)

  useEffect(() => {
    if (_userInfo.id === 0) {
      request.get<UserInfo>('/userinfo').then(res => {
        _userInfo = res
        setUserInfo(res)
      })
    }
  }, [])

  return userInfo
}
