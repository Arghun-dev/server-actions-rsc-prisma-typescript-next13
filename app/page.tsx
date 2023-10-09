import { getTodos } from '@/lib/todos'
import NewTodoForm from '@/components/NewTodoForm'

export default async function Home() {
  const { todos } = await getTodos()
  console.log(todos)

  return (
    <section className='py-2'>
      <div className='container'>
        <h1>Todos</h1>
        <NewTodoForm />
        <ul>{todos?.map(todo => <li key={todo.id}>{todo.title}</li>)}</ul>
      </div>
    </section>
  )
}
