const uri = 'http://localhost:3000/api/users'

export async function createUser(user: any) {
  await fetch(uri, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
}
