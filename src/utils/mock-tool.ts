import { pathToRegexp, Key } from 'path-to-regexp'

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
  processMockData(method: string, url: string, data: string) {
    let match = false
    const pathKeys: Key[] = []
    for (let requestPath in allMockData) {
      requestPath = requestPath.replace(/ +/, ' ')
      const pathPart = requestPath.split(' ')
      const pathRegExp = pathToRegexp(pathPart[1], pathKeys)
      if (method.toLowerCase() === pathPart[0].toLowerCase() && pathRegExp.test(url)) {
        const pathParmKeys = pathKeys.map(pk => pk.name)
        const pathParamValues = pathRegExp.exec(url) as string[]
        const pathParams: any = {}
        let counter = 1
        pathParmKeys.forEach(pp => {
          pathParams[pp] = pathParamValues[counter]
          counter++
        })
        const retData = allMockData[requestPath]
        match = true
        return new Promise(resolve => {
          resolve(retData({ pathParams, data }))
        })
      }
    }
    if (!match) {
      return null
    }
  }
}
