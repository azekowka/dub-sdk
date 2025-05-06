import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";
import { Metadata } from "next";

// This is a dynamic route that will redirect to the original URL when someone visits a short link
export default async function SlugPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  
  // Get the original URL from Supabase
  const { data, error } = await supabase
    .from('links')
    .select('url')
    .eq('slug', slug)
    .single();
  
  // If the slug doesn't exist or there's an error, redirect to the homepage
  if (error || !data) {
    console.error("Error retrieving URL or slug not found:", error?.message || "Slug not found");
    redirect('/');
  }
  
  // Make sure we have a valid URL to redirect to
  if (!data.url) {
    console.error("Retrieved URL is empty");
    redirect('/');
  }
  
  console.log("Redirecting to:", data.url);
  
  // Redirect to the original URL
  redirect(data.url);
} 