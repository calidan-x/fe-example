import { Todo } from '@/apis'

let todoDB = [
  {
    id: 1,
    content: '看电影'
  },
  {
    id: 2,
    content: '洗衣服'
  },
  {
    id: 3,
    content: '写代码'
  }
]

export const todoMockData = {
  'GET /todos': (): Todo[] => todoDB,
  'GET /todos/:id': ({ pathParams }: any) => {
    return todoDB.find(td => td.id === parseInt(pathParams.id))
  },
  'POST /todos': ({ pathParams, data }: any) => {
    todoDB = [...todoDB, data]
  }
}
