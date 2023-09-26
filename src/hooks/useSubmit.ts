import { sha512_256 } from 'js-sha512'
import { usePathname } from 'next/navigation'
import { SubmitHandler } from 'react-hook-form'
import { Passwords } from '@/types/signals'
import { supabase } from '@/utils/supabase'

export const useSubmit = (id: number, user_id: number, isChecked: boolean) => {
  const pathname = usePathname()

  const onSubmit: SubmitHandler<Passwords> = async ({ service, email, name, password, two_factor }) => {
    if (pathname === '/create' && isChecked) {
      const salt = Math.random().toString(36).slice(-8)
      const hashedPassword = sha512_256.hex(`${password}${salt}`)

      await supabase.from('password').insert([{ service, email, name, password: hashedPassword, two_factor, user_id }])
    } else if (pathname === '/edit') {
      if (typeof id === 'number') {
        await supabase.from('password').update({ service, email, name, password, two_factor }).eq('id', id)
      }
    }
    window.location.href = '/'
  }

  return { onSubmit }
}
