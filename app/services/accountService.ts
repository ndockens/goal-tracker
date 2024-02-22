const uri = 'http://localhost:3000/api/accounts'

export async function createAccount(account: any) {
  await fetch(uri, {
    method: 'POST',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(account),
  });
}
