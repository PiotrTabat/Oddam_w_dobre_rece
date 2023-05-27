import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://vklmqgqubttpqocfmorw.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZrbG1xZ3F1YnR0cHFvY2Ztb3J3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5NDMyNjAsImV4cCI6MjAwMDUxOTI2MH0.vRAXrztYwBkmn7QEhVjokh7hD4_hYGAJN_Bc61TaQpg'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)