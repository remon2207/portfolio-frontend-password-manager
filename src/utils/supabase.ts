import { createClient } from '@supabase/supabase-js'
import type { Database } from '@/types/schema'

process.env.NEXT_PUBLIC_SUPABASE_URL = 'https://fduekqwmswnygftcwzru.supabase.co'

export const supabase = createClient<Database>(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  {
    auth: { persistSession: false },
  }
)
