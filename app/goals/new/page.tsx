'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createGoal } from '../../services/goalService'

export default function NewGoal() {
  const [title, setTitle] = useState("")
  const router = useRouter()

  const onTitleChange = (e: any) => {
    setTitle(e.target.value)
  }

  const onSubmit = () => {
    createGoal({ title })
    router.push('/')
  }

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-col m-10">
        <div className="flex gap-x-2">
          <label htmlFor="title">New Goal</label>
          <input name="title" type="text" value={title} onChange={onTitleChange}></input>
        </div>
        <button className="m-5" onClick={onSubmit}>Submit</button>
      </div>
    </main>
  );
}
