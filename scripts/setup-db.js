// Run these SQL commands in the Supabase SQL Editor

/*
-- Create a table for storing links
CREATE TABLE links (
  id SERIAL PRIMARY KEY,
  url TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create an index on the slug column for faster lookups
CREATE INDEX idx_links_slug ON links(slug);

-- Create an RLS policy to allow anyone to read links
CREATE POLICY "Anyone can read links" 
ON links 
FOR SELECT 
USING (true);

-- Create an RLS policy to allow authenticated users to insert links
CREATE POLICY "Authenticated users can create links" 
ON links 
FOR INSERT 
WITH CHECK (true);

-- Enable RLS on the links table
ALTER TABLE links ENABLE ROW LEVEL SECURITY;
*/

console.log(`
========== SUPABASE SETUP INSTRUCTIONS ==========

1. Go to your Supabase dashboard at https://app.supabase.com
2. Select your project
3. Go to the SQL Editor
4. Create a new query
5. Copy and paste the SQL commands from this file
6. Run the query

This will:
- Create a 'links' table with id, url, slug, and created_at columns
- Create an index on the slug column for faster lookups
- Set up Row Level Security policies

=================================================
`); 