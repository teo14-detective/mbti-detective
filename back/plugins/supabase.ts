import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
const supabase: SupabaseClient = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export default supabase;
