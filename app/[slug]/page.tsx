import { supabase } from "@/lib/supabase";
import { redirect } from "next/navigation";

// Define the correct props type for dynamic routes
type Props = {
  params: { slug: string };
  searchParams?: { [key: string]: string | string[] | undefined };
};

// This is a dynamic route that will redirect to the original URL when someone visits a short link
export default async function SlugPage({ params }: Props) {
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
  
  // Return something to satisfy TypeScript
  return <></>;
}

// Metadata for the page without type annotation
export function generateMetadata({ params }: Props) {
  return {
    title: `Redirecting... | b2a.kz/${params.slug}`,
    description: `Short link redirect page for b2a.kz/${params.slug}`,
  };
} 