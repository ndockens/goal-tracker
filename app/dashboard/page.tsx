import Link from 'next/link'
import { withPageAuthRequired, getSession } from '@auth0/nextjs-auth0'
import { MongoClient } from 'mongodb';

export default withPageAuthRequired(
  async function Dashboard() {
    const session = await getSession()
    const userName = session!.user.name ?? session!.user.email
    const goals = await getGoals()
    return (
        <main className="bg-slate-900 flex flex-col items-center min-h-screen p-24">
        <div>Hello, {userName}!</div>
        <div>Welcome to your goals dashboard.</div>
        <Link href="/goals/new" className="bg-sky-500 min-w-32 mt-14 p-3 rounded-xl text-center text-sky-50 hover:bg-sky-400">Add goal</Link>
        <div className="flex flex-col m-8">
            {goals.map((x: any) => <div key={x.id} className="bg-slate-800 m-1 p-4 rounded-xl text-slate-300">{x.title}</div>)}
        </div>
        </main>
    );
  },
  { returnTo: '/dashboard' }
)

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
