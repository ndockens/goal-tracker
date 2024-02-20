'use client'

import { useState } from 'react'
import { createGoal } from '../../services/goalService'

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
      <div className="flex flex-col items-center m-10 text-center">
        <div className="text-lg text-slate-50">What do you want to accomplish?</div>
        <input name="title" type="text" value={title} onChange={onTitleChange} placeholder="e.g. Win the Nobel prize" className="bg-slate-800 min-w-64 m-6 p-3 rounded-xl text-slate-300 focus:outline-none focus:ring focus:ring-slate-400"></input>
        <button className="bg-sky-500 m-3 p-3 rounded-xl text-sky-50 w-32 hover:bg-sky-400" onClick={onSubmit}>Submit</button>
      </div>
    </main>
  );
}
