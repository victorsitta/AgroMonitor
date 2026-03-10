import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://mrzcbavxvtwqiormqylu.supabase.co";
const supabaseKey = "sb_publishable_1soJr3gfZ1azGfNx7w3v3Q_jE-ttHEt";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase