'use client'

import { useState } from 'react'
import { createUser } from '@/app/services/userService'

export default function NewAccount() {
  const [account, setAccount] = useState({ emailAddress: '', alias: '', password: '' })

  const onEmailAddressChange = (e: any) => {
    updateAccountProperty('emailAddress', e.target.value)
  }

  const onAliasChange = (e: any) => {
    updateAccountProperty('alias', e.target.value)
  }

  const onPasswordChange = (e: any) => {
    updateAccountProperty('password', e.target.value)
  }

  const updateAccountProperty = (key: string, value: any) => {
    const updatedAccount: any = {...account}
    updatedAccount[key] = value
    setAccount(updatedAccount)
  }

  const onSubmit = async () => {
    await createUser(account)
    returnToHomePage();
  }

  const returnToHomePage = () => {
    window.location.assign('/') // TODO: Find a more performant way to do this
  }

  return (
    <main className="bg-slate-900 flex flex-col items-center min-h-screen p-24">
      <div className="bg-slate-800 flex flex-col items-center p-7 rounded-xl text-center">
        <div className="text-lg text-slate-50">New Account</div>
        <input name="emailAddress" type="email" value={account.emailAddress} onChange={onEmailAddressChange} placeholder="Email Address" className="bg-slate-700 min-w-64 mt-4 p-3 rounded-xl text-slate-300 focus:outline-none focus:ring focus:ring-slate-400" />
        <input name="alias" type="text" value={account.alias} onChange={onAliasChange} placeholder="Alias" className="bg-slate-700 min-w-64 mt-4 p-3 rounded-xl text-slate-300 focus:outline-none focus:ring focus:ring-slate-400" />
        <input name="password" type="password" value={account.password} onChange={onPasswordChange} placeholder="Password" className="bg-slate-700 min-w-64 mt-4 p-3 rounded-xl text-slate-300 focus:outline-none focus:ring focus:ring-slate-400" />
        <button className="bg-sky-500 min-w-32 mt-7 p-3 rounded-xl text-center text-sky-50 hover:bg-sky-400" onClick={onSubmit}>Submit</button>
      </div>
    </main>
  );
}
