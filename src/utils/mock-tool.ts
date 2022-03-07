import { pathToRegexp } from 'path-to-regexp'

import { envConfig } from '@/config'

let allMockData: any = {}
export const mockTool = {
  async importMockData() {
    if (envConfig.env !== 'dev') {
      return
    }
    const mockData = await import('@/mock')
    for (const k in mockData) {
      mockTool.add((mockData as any)[k])
    }
  },
  add(mockData: any) {
    allMockData = { ...allMockData, ...mockData }
  },
  processMockData(method: string, url: string) {
    let match = false
    for (let requestPath in allMockData) {
      requestPath = requestPath.replace(/ +/, ' ')
      const pathPart = requestPath.split(' ')
      if (
        method.toLowerCase() === pathPart[0].toLowerCase() &&
        pathToRegexp(pathPart[1]).test(url)
      ) {
        const retData = allMockData[requestPath]
        match = true
        return new Promise(resolve => {
          resolve(retData())
        })
      }
    }
    if (!match) {
      return null
    }
  }
}
