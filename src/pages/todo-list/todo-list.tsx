import { useEffect, useState } from 'react'

import { todoApi, Todo } from '@/apis'

import style from './todo-list.module.css'

console.log(style)

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  useEffect(() => {
    todoApi.getList().then(res => {
      setTodos(res)
    })

    todoApi.getTodo(1).then(res => {
      console.log('id 1:', res)
    })
  }, [])

  return (
    <div className={style.title}>
      <div>Todo 页面</div>
      {todos.map(todo => (
        <div className={style.todoItem} key={todo.id}>
          {todo.content}
        </div>
      ))}
    </div>
  )
}
