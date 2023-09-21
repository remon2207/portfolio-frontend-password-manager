import { NextPage } from 'next'
import { Table } from '@/components/organisms/Table'
import { sessionCheck } from '@/utils/sessionCheck'

const Home: NextPage = async () => {
  const data = await sessionCheck()
  const passwords = data?.passwords

  if (typeof passwords === 'undefined') {
    return <p>error...</p>
  }

  return (
    <>
      <Table passwords={passwords} />
    </>
  )
}

export default Home
