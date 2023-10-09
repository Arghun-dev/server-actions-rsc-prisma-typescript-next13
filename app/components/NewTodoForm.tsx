'use client'
import { useRef } from 'react'

import { createTodoAction } from '@/app/_actions'

export default function NewTodoForm() {
  const formRef = useRef<HTMLFormElement>(null)
  async function action(data: FormData) {
    const title = data.get('title')
    if (!title || typeof title !== 'string') return

    // call a server action to create a new Todo
    await createTodoAction(title)

    // reset the form
    formRef.current?.reset()
  }

  return (
    <form action={action} ref={formRef}>
      <h2>Create a new Todo</h2>
      <input type='text' name='title' className='border-2' />
      <button type='submit'>Add Todo</button>
    </form>
  )
}
