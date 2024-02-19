import Link from 'next/link'
import { MongoClient } from 'mongodb';

export default async function Home() {
  const goals = await getGoals();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <Link href="/goals/new">New Goal</Link>
      <div className="flex flex-col m-5">
        {goals.map((x: any) => <div key={x.id}>{x.title}</div>)}
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
      const goals = await database.collection('goals').aggregate().toArray();
      return goals
    } finally {
        await client.close()
    }
}
