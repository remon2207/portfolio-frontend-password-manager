import type { PostgrestSingleResponse } from '@supabase/supabase-js'
import { NextPage } from 'next'
import { Table } from '@/components/organisms/Table'
import { Passwords } from '@/types/signals'
import { supabase } from '@/utils/supabase'

const Home: NextPage = async () => {
  const passwords: PostgrestSingleResponse<Passwords[]> = await supabase
    .from('password')
    .select()
    .order('service', { ascending: true })

  return (
    <>
      <Table passwords={passwords} />
    </>
  )
}

export default Home
