import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ltzpbdjqkkwkkmmqmpmi.supabase.co';
const supabaseKey = 'sb_publishable_8zJqOfGSPflwT-QjDBgIKQ_hWlrpUT4'; // Provided by user

export const supabase = createClient(supabaseUrl, supabaseKey);
