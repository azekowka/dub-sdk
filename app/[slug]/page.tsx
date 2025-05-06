import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";
import { Metadata } from "next";

// This is a dynamic route that will redirect to the original URL when someone visits a short link
export default async function SlugPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Get the original URL from Supabase
  const { data } = await supabase
    .from('links')
    .select('url')
    .eq('slug', slug)
    .single();
  
  // If the slug doesn't exist, redirect to the homepage
  if (!data) {
    redirect('/');
  }
  
  // Redirect to the original URL
  redirect(data.url);
} 