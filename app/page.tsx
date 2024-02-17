import { getGoals } from './services/goalService'

export default async function Home() {
  const goals = await getGoals();
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="flex flex-col m-5">
        {goals.map(x => <div key={x.id}>{x.title}</div>)}
      </div>
    </main>
  );
}
