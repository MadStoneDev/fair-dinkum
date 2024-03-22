import { createClient } from "@supabase/supabase-js";

const supabaseProjectUrl: any = process.env.NEXT_SUPABASE_PROJECT_URL;
const supabaseKey: any = process.env.NEXT_SUPABASE_API_KEY;
// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseProjectUrl, supabaseKey);

export { supabase };
