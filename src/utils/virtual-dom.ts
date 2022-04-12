import React, { ReactNode } from 'react'

export const overrideChildren = (
  children: ReactNode,
  overrideProps: (elementType: string, elementProps: any, elementIndex?: number) => any
) => {
  if (!children) {
    return null
  }
  const newChildrenArray: any = []
  const childrenArray = React.Children.toArray(children)
  childrenArray.forEach((node: any, index: number) => {
    if (node.type) {
      const type: string = node.type.displayName || node.type
      node = React.cloneElement(
        node,
        overrideProps(
          type,
          {
            ...node.props,
            children: overrideChildren(node.props.children, overrideProps)
          },
          index
        )
      )
    }
    newChildrenArray.push(node)
  })

  return newChildrenArray
}
