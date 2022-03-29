import { useState } from 'react'

import { ModalBox, Modal, Loading } from '@/components'

import './modal-test.scss'

const MyFrom = () => {
  return (
    <div>
      <input placeholder="请输入姓名" />
      <br />
      <input placeholder="请输入年龄" />
      <br />
    </div>
  )
}

export const ModalTest = () => {
  const [visible, setVisible] = useState(false)

  return (
    <div>
      <button onClick={() => Loading.show()}>显示Loading</button>
      <button onClick={() => Loading.hide()}>隐藏Loading</button>
      <br />
      <br />
      <button onClick={() => setVisible(true)}>弹出</button>
      <ModalBox visible={visible}>
        <div className="modal-wrap">
          <div>我是一个弹出框</div>
          <button onClick={() => setVisible(false)}>确定</button>
        </div>
      </ModalBox>
      <br /> <br /> <br />
      <button
        onClick={() => {
          Modal.show({
            title: '简单弹框',
            content: '简单的弹框内容',
            onOk() {
              console.log('点击了确定按钮')
            }
          })
        }}
      >
        弹出
      </button>
      <br /> <br /> <br />
      <button
        onClick={() => {
          Modal.show({
            title: '复杂弹框',
            content: <MyFrom />
          })
        }}
      >
        弹出
      </button>
    </div>
  )
}
