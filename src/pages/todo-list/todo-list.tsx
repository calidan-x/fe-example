import { useEffect, useState } from 'react'

import { todoApi, Todo } from '@/apis'

import style from './todo-list.module.css'

export const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([])

  const refreshData = () => {
    todoApi.getList().then(res => {
      setTodos(res)
    })
  }

  useEffect(() => {
    refreshData()
    todoApi.getTodo(1).then(res => {
      console.log('id 3:', res)
    })
  }, [])

  const addTodo = () => {
    todoApi.addTodo({ id: 10, content: 'Hello' }).then(() => {
      refreshData()
    })
  }

  return (
    <div className={style.title}>
      <div>Todo 页面</div>
      {todos.map(todo => (
        <div className={style.todoItem} key={todo.id}>
          {todo.content}
        </div>
      ))}
      <button type="button" onClick={addTodo}>
        添加
      </button>
    </div>
  )
}
