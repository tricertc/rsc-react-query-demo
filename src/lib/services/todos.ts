import { Todo } from '@/types/todo'

export default async function getTodos() {
  console.log('🚀 ~ file: todos.ts:4 ~ getTodos ~ getTodos:', getTodos)

  await new Promise(resolve => setTimeout(resolve, 2000))

  return fetch('https://jsonplaceholder.typicode.com/todos').then<Todo[]>(response => {
    return response.json()
  })
}
