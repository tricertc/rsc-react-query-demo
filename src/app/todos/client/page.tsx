'use client'

import TodoList from '@/components/todolist'
import getTodos from '@/lib/services/todos'
import { useQuery } from 'react-query'
import { ScaleLoader } from 'react-spinners'

export default function ClientTodos() {
  const { isFetching, data } = useQuery('todos', getTodos)

  if (isFetching) {
    return <ScaleLoader />
  }

  return (
    <>
      <h1 className="font-bold tracking-tight text-3xl pb-5">Client Todos</h1>
      <TodoList todos={data ?? []} />
    </>
  )
}
