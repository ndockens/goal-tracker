import Link from 'next/link'
import { MongoClient } from 'mongodb';

export default async function Home() {
  const goals = await getGoals()
  return (
    <main className="bg-slate-900 flex flex-col items-center min-h-screen p-24">
      <div className="font-bold text-center text-5xl">Stay <span className="text-sky-300">on Track</span>.</div>
      <div className="font-bold text-center text-5xl"><span className="text-sky-300">Crush</span> Your Goals.</div>
      <div className="font-bold text-center text-5xl">Celebrate With Your <span className="text-sky-300">Friends</span>.</div>
      <Link href="/api/auth/login" className="bg-sky-500 min-w-32 mt-14 p-3 rounded-xl text-center text-sky-50 hover:bg-sky-400">Log In or Sign Up</Link>
      <Link href="/goals/new" className="bg-sky-500 min-w-32 mt-14 p-3 rounded-xl text-center text-sky-50 hover:bg-sky-400">Add Goal</Link>
      <div className="flex flex-col m-8">
        {goals.map((x: any) => <div key={x.id} className="bg-slate-800 m-1 p-4 rounded-xl text-slate-300">{x.title}</div>)}
      </div>
    </main>
  );
}

async function getGoals() {
  const uri = process.env.MONGODB_URI as string
  const client = new MongoClient(uri)

    try {
      client.connect()
      const database = client.db('test')
      const goals = await database.collection('goals').aggregate().toArray()
      return goals
    } finally {
        await client.close()
    }
}
