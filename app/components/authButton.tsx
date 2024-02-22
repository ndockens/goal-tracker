import Link from "next/link";
import { Session, getSession } from '@auth0/nextjs-auth0'

export default async function AuthButton() {
  const htmlClasses: string = 'bg-sky-500 min-w-20 p-2 rounded-xl text-center text-sky-50 hover:bg-sky-400'
  
  const session: Session | null | undefined = await getSession()
  const uri: string = session?.user ? '/api/auth/logout' : '/api/auth/login'
  const label: string = session?.user ? 'Log out' : 'Log in'
  
  return <Link href={uri} className={htmlClasses}>{label}</Link>
}