import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://occyhlgzbhtswdzwompb.supabase.co/rest/v1'
const supabaseAnonKey = 'sb_publishable_t5-DHBbyKV2FOaJlJvIb3g_lM7MqZL_'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)