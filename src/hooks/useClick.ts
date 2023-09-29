import { supabase } from '@/utils/supabase'

export const useClick = (id: number) => {
  const handleClickDelete = async () => {
    await supabase.from('password').delete().eq('id', id)
    window.location.href = '/'
  }

  return {
    handleClickDelete,
  }
}
