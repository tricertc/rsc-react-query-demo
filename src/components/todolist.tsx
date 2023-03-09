import { Todo } from '@/types/todo'

export default function TodoList({ todos }: { todos: Todo[] }) {
  return (
    <ul className="block space-y-2">
      {todos.map(todo => (
        <li key={todo.id} className="flex gap-2">
          <span className={todo.completed ? 'text-green-500' : 'text-yellow-500'}>
            {todo.completed ? '✅' : '❌'}
          </span>
          <strong>{todo.title}</strong>
        </li>
      ))}
    </ul>
  )
}
