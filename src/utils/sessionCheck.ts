import { getServerSession } from 'next-auth'
import { supabase } from '@/utils/supabase'

export const sessionCheck = async () => {
  const session = await getServerSession()
  const sessionEmail = String(session?.user?.email)
  const sessionName = String(session?.user?.name)
  const { data } = await supabase.from('user').select('email').eq('email', 'name@email.com').single()

  if (data?.email) {
    const { data: user } = await supabase.from('user').select('id').eq('email', sessionEmail).single()
    const userId = user?.id
    if (typeof userId === 'number') {
      const { data: passwords } = await supabase.from('password').select().eq('user_id', userId)
      if (passwords) {
        return { passwords, userId }
      }
    }
  }

  await supabase.from('user').insert([{ email: sessionEmail, name: sessionName }])

  const { data: user } = await supabase.from('user').select('id').eq('email', sessionEmail).single()
  const userId = user?.id

  if (typeof userId === 'number') {
    const { data: passwords } = await supabase.from('password').select().eq('userId', userId)

    if (passwords) {
      return { passwords, userId }
    }
  }

  return null
}
