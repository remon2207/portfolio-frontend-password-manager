import { Header } from '@/components/organisms/Header'
import { Table } from '@/components/organisms/Table'
import { Passwords, Users } from '@/types/signals'
import { supabase } from '@/utils/supabase'

import type { PostgrestSingleResponse } from '@supabase/supabase-js'

const Home = async () => {
  const passwords: PostgrestSingleResponse<Passwords[]> = await supabase.from('password').select('* user ( id )')

  return (
    <>
      <Header />
      <Table passwords={passwords} />
    </>
  )
}

export default Home
