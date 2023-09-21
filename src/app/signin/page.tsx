'use client'

import type { NextPage } from 'next'
import { useSession, signIn, signOut } from 'next-auth/react'

const Signin: NextPage = () => {
  const { data: session, status } = useSession()
  const userEmail = session?.user?.email

  if (status === 'loading') {
    return <p>ロード中...</p>
  }

  if (status === 'authenticated') {
    return (
      <>
        <p>Signed in as {userEmail}</p>
        <button onClick={() => signOut()} type="button">
          サインアウト
        </button>
        <img src="https://cdn.pixabay.com/photo/2017/08/11/19/36/vw-2632486_1280.png" />
      </>
    )
  }

  return (
    <>
      <p>Not signed in.</p>
      <button onClick={() => signIn('github', { callbackUrl: '/' })} type="button">
        サインイン
      </button>
    </>
  )
}

export default Signin
