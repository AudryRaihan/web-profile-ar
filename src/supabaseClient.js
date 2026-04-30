import { createClient } from '@supabase/supabase-js'

// HAPUS bagian /rest/v1 di belakangnya
const supabaseUrl = 'https://occyhlgzbhtswdzwompb.supabase.co' 
const supabaseAnonKey = 'sb_publishable_t5-DHBbyKV2FOaJlJvIb3g_lM7MqZL_'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)