import { ReactNode, useState } from 'react'

import { overrideChildren } from '@/utils/virtual-dom'

import './tab.css'

interface TabProps {
  children: ReactNode
}

export const Tab = ({ children }: TabProps) => {
  const tabTitles: string[] = []
  const [activeIndex, setActiveIndex] = useState(0)

  children = overrideChildren(children, (elementType, overrideProps) => {
    if (elementType === 'TabPane') {
      overrideProps.visible = activeIndex === tabTitles.length
      tabTitles.push(overrideProps.title)
    }
    return overrideProps
  })

  return (
    <div>
      {tabTitles.map((tTitle, index) => (
        <div
          key={index}
          className={index === activeIndex ? 'tab-title-active' : 'tab-title'}
          onClick={() => {
            setActiveIndex(index)
          }}
        >
          {tTitle}
        </div>
      ))}
      {children}
    </div>
  )
}

Tab.displayName = 'Tab'

interface TabPaneProps {
  children: ReactNode
  title: string
  visible?: boolean
}

export const TabPane = ({ children, visible }: TabPaneProps) => {
  if (!visible) {
    return null
  }
  return <div>{children}</div>
}

TabPane.displayName = 'TabPane'
