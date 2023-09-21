import { usePathname } from 'next/navigation'
import { SubmitHandler } from 'react-hook-form'
import { Passwords } from '@/types/signals'
import { supabase } from '@/utils/supabase'

export const useSubmit = (id: number) => {
  const pathname = usePathname()

  const onSubmit: SubmitHandler<Passwords> = async ({ service, email, name, password, two_factor }) => {
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
