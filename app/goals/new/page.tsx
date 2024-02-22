'use client'

import { useState } from 'react'
import { createGoal } from '@/app/services/goalService'

export default function NewGoal() {
  const [title, setTitle] = useState("")

  const onTitleChange = (e: any) => {
    setTitle(e.target.value)
  }

  const onSubmit = async () => {
    await createGoal({ title })
    returnToHomePage();
  }

  const returnToHomePage = () => {
    window.location.assign('/') // TODO: Find a more performant way to do this
  }

  return (
    <main className="bg-slate-900 flex flex-col items-center min-h-screen p-24">
      <div className="bg-slate-800 flex flex-col items-center m-10 p-7 rounded-xl text-center">
        <div className="text-lg text-slate-50">What do you want to accomplish?</div>
        <input name="title" type="text" value={title} onChange={onTitleChange} placeholder="e.g. Win the Nobel prize" className="bg-slate-700 min-w-64 mt-4 p-3 rounded-xl text-center text-slate-300 focus:outline-none focus:ring focus:ring-slate-400" />
        <button className="bg-sky-500 min-w-32 mt-9 p-3 rounded-xl text-center text-sky-50 hover:bg-sky-400" onClick={onSubmit}>Submit</button>
      </div>
    </main>
  );
}
