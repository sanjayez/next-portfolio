import { createClient } from "@supabase/supabase-js";

// const supabaseUrl = process.env.SUPABASE_URL!;
// const supabaseKey = process.env.SUPABASE_KEY!;

const supabaseUrl = 'https://hiaarjxwfzqavnltusxf.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpYWFyanh3ZnpxYXZubHR1c3hmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY4MjU3NjA5MSwiZXhwIjoxOTk4MTUyMDkxfQ.1y-rn92VYXY26eiUhTcIaRLqzegQrvh8i91SanaChS4';

const supabaseAdmin = createClient(
    supabaseUrl,
    supabaseKey
);

export default supabaseAdmin;