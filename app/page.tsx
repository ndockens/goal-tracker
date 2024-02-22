import Link from 'next/link'

export default async function Home() {
  return (
    <main className="bg-slate-900 flex flex-col items-center min-h-screen p-24">
      <div className="font-bold text-center text-5xl">Stay <span className="text-sky-300">on Track</span>.</div>
      <div className="font-bold text-center text-5xl"><span className="text-sky-300">Crush</span> Your Goals.</div>
      <div className="font-bold text-center text-5xl">Celebrate With Your <span className="text-sky-300">Friends</span>.</div>
      
      <Link href="/dashboard" className="bg-sky-500 min-w-32 mt-14 p-3 rounded-xl text-center text-sky-50 hover:bg-sky-400">Get started</Link>
    </main>
  );
}
