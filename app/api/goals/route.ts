const goals = [
  { id: crypto.randomUUID(), title:'Goal 1' },
  { id: crypto.randomUUID(), title:'Goal 2' },
  { id: crypto.randomUUID(), title:'Goal 3' }
]

export async function GET() {
  return Response.json(goals)
}

export async function POST(request: Request) {
  const goal = await request.json()
  goal.id = crypto.randomUUID()
  goals.push(goal)

  return Response.json(goal)
}
