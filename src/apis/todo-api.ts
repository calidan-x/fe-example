import { request } from '../utils/request'

export interface Todo {
  id: number
  content: string
}

export const todoApi = {
  getList() {
    return request.get<Todo[]>('/todos')
  },
  getTodo(id: number) {
    return request.get<Todo>(`/todos/${id}`)
  }
}
