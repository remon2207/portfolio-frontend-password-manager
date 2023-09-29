import { NextPage } from 'next'
import { Table } from '@/components/organisms/Table'
import { sessionCheck } from '@/utils/sessionCheck'

const Home: NextPage = async () => {
  const data = await sessionCheck()
  const passwords = data?.passwords
  const userId = data?.userId

  if (typeof userId === 'undefined') {
    return <h1 className="relative top-[30%] text-center text-2xl font-bold lg:text-4xl">サインインしてください</h1>
  }

  if (typeof passwords === 'undefined') {
    return null
  }

  return <Table passwords={passwords} />
}

export default Home
