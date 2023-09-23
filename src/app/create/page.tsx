import type { NextPage } from 'next'
import { CreateForm } from '@/components/templates/CreateForm'
import { sessionCheck } from '@/utils/sessionCheck'

const Create: NextPage = async () => {
  const data = await sessionCheck()
  const userId = data?.userId

  if (typeof userId === 'undefined') {
    return (
      <>
        <h1 className="relative top-[30%] text-center text-2xl font-bold lg:text-4xl">サインインしてください</h1>
      </>
    )
  }

  return (
    <>
      <CreateForm />
    </>
  )
}

export default Create
