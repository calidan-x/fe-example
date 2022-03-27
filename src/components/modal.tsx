import { ReactNode } from 'react'
import ReactDOM from 'react-dom'

export interface ModelProps {
  title?: string
  content?: ReactNode
  onOk?: () => void
}

export const Modal = ({ title = '', content = '', onOk }: ModelProps) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.2)',
        zIndex: 9999
      }}
    >
      <div
        style={{
          backgroundColor: 'white',
          width: '300px',
          padding: '10px',
          boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
          borderRadius: '5px'
        }}
      >
        <div style={{ textAlign: 'center' }}>{title}</div>
        <div style={{ textAlign: 'center', fontSize: '12px', marginTop: '10px' }}>{content}</div>
        <br />
        <div style={{ textAlign: 'center' }}>
          <button type="button" onClick={onOk}>
            确定
          </button>
        </div>
      </div>
    </div>
  )
}

Modal.show = ({ title, content, onOk }: ModelProps) => {
  let modalWrap = document.getElementById('modal-wrap')

  if (!modalWrap) {
    modalWrap = document.createElement('div')
    modalWrap.id = 'modal-wrap'
    document.body.appendChild(modalWrap)
  }

  ReactDOM.render(
    <Modal
      title={title}
      onOk={() => {
        onOk && onOk()
        Modal.close()
      }}
      content={content}
    />,
    modalWrap
  )
}

Modal.close = () => {
  const modal = document.getElementById('modal-wrap')
  if (modal) {
    document.body.removeChild(modal)
  }
}
