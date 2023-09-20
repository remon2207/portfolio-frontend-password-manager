import { createClient } from '@supabase/supabase-js'

import type { Database } from '@/types/schema'

export const supabase = createClient<Database>(
  'https://fduekqwmswnygftcwzru.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  {
    auth: { persistSession: false },
  }
)
