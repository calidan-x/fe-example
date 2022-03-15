import { useNavigate } from 'react-router-dom'

import { IconTask, IconAddFile } from '@/icon'

import './login.scss'

export const Login = () => {
  const navigate = useNavigate()

  return (
    <div className="login-wrap">
      <IconTask />
      <IconAddFile />
      <div className="title">登录页面</div>
      <button
        type="button"
        onClick={() => {
          navigate('/todo')
        }}
      >
        进入
      </button>
    </div>
  )
}
