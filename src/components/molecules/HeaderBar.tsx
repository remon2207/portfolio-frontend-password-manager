'use client'

import { signIn, signOut, useSession } from 'next-auth/react'
import { CustomLink } from '@/components/atoms/CustomLink'
import { Title } from '@/components/atoms/Title'

export const HeaderBar = () => {
  const { data: session } = useSession()

  return (
    <div className="flex h-20 justify-between">
      <CustomLink
        className="header-button ml-4 md:ml-20 xl:ml-64"
        href="/create"
        linkName="新規作成"
        testId="createButton"
      />
      <Title
        className="my-auto text-center text-2xl font-bold underline-offset-8 hover:underline md:text-4xl xl:text-5xl"
        testId="title"
        title="パスワード管理"
      />

      {!session?.user?.email && (
        <CustomLink
          className="header-button mr-4 md:mr-20 xl:mr-64"
          href="/"
          linkName="サインイン"
          onClick={() => signIn('github')}
          testId="signoutButton"
        />
      )}
      {session?.user?.email && (
        <CustomLink
          className="header-button mr-4 md:mr-20 xl:mr-64"
          href="/"
          linkName="サインアウト"
          onClick={() => signOut()}
          testId="signoutButton"
        />
      )}
    </div>
  )
}
