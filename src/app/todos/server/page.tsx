import TodoList from '@/components/todolist'
import getTodos from '@/lib/services/todos'
import { use } from 'react'

export default function ServerTodos() {
  const todos = use(getTodos())

  return (
    <>
      <h1 className="font-bold tracking-tight text-3xl pb-5">Server Todos</h1>
      <TodoList todos={todos} />
    </>
  )
}
