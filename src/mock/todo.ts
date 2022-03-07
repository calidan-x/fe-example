import { Todo } from '@/apis'

export const todoMockData = {
  'GET /todos': (): Todo[] => [
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
  ],
  'GET /todos/:id': (): Todo => ({
    id: 1,
    content: '看电影'
  })
}