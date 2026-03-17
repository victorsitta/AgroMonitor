import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://mrzcbavxvtwqiormqylu.supabase.co";
const supabaseAnonKey = "sb_publishable_1soJr3gfZ1azGfNx7w3v3Q_jE-ttHEt";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);