import axios from 'axios'

import { mockTool } from './mock-tool'
import { envConfig } from '../config'

axios.interceptors.request.use(config => {
  // 添加header
  return config
})

export const request = {
  get<T>(url: string, query?: any): Promise<T> {
    const mockReturn = mockTool.processMockData('GET', url, '')
    console.log('GET ' + envConfig.backendUrlBase + url)
    if (mockReturn !== null) {
      return mockReturn as Promise<T>
    }
    return axios.get<T>(envConfig.backendUrlBase + url, { params: query }).then(res => res.data)
  },
  post<T>(url: string, data?: any): Promise<T> {
    const mockReturn = mockTool.processMockData('POST', url, data)
    console.log('POST ' + envConfig.backendUrlBase + url)
    if (mockReturn !== null) {
      return mockReturn as Promise<T>
    }
    return axios.post<T>(envConfig.backendUrlBase + url, { data }).then(res => res.data)
  }
}
