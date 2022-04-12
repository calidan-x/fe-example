import { Tab, TabPane } from '@/components'

export const TabTest = () => {
  return (
    <div>
      <Tab>
        <div>
          <TabPane title="Tab1">Tab1内容</TabPane>
        </div>
        <TabPane title="Tab2">Tab2内容</TabPane>
      </Tab>
    </div>
  )
}
