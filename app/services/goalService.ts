const goals = [
  { id: crypto.randomUUID(), title:'Goal 1' },
  { id: crypto.randomUUID(), title:'Goal 2' },
  { id: crypto.randomUUID(), title:'Goal 3' }
]

export async function getGoals() {
  return goals
}

export async function createGoal(goal: any) {
  goal.id = crypto.randomUUID()
  goals.push(goal)
}
