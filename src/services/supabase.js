import { createClient } from "@supabase/supabase-js";

export const supabaseUrl =
    "https://zhnofbhgelkovtlytfmi.supabase.co";
const supabaseKey =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpobm9mYmhnZWxrb3Z0bHl0Zm1pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDU4NTMxNzMsImV4cCI6MjAyMTQyOTE3M30.nZbHJpLUApbQSZmWTMzhPk-oTb1w2Yzl-IEtpAX0n3A";
const supabase = createClient(
    supabaseUrl,
    supabaseKey
);

export default supabase;
