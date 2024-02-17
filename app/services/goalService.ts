const uri = 'http://localhost:3000/api/goals'

export async function getGoals() {
  const response = await fetch(uri)
  return response.json()
}

export async function createGoal(goal: any) {
  await fetch(uri, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(goal),
  });
}
