import { createClient } from '@supabase/supabase-js'
import { usePathname } from 'next/navigation'
import { SubmitHandler } from 'react-hook-form'

import { Passwords } from '@/types/signals'

import type { Database } from '@/types/schema'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
  auth: { persistSession: false },
})

export const useSubmit = () => {
  const pathname = usePathname()

  const onSubmit: SubmitHandler<Passwords> = async ({ service, email, name, password, two_factor, id }) => {
    if (pathname === '/create') {
      await supabase.from('password').insert([{ service, email, name, password, two_factor, user_id: 1 }])
    } else if (pathname === '/edit') {
      if (typeof id === 'number') {
        await supabase.from('password').update({ service, email, name, password, two_factor }).eq('id', id)
      }
    }
    window.location.href = '/'
  }

  return { onSubmit }
}
