"use server";

import { supabase } from "@/lib/supabase";

// Generate a random 3-letter slug
function generateRandomSlug(): string {
  const characters = 'abcdefghijklmnopqrstuvwxyz';
  let result = '';
  for (let i = 0; i < 3; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

export async function shorten(_prevState: any, formData: FormData) {
  const url = formData.get("url");
  if (!url || typeof url !== "string") {
    return {
      shortLink: "Invalid URL",
    };
  }
  
  try {
    // Generate a random 3-letter slug
    let slug = generateRandomSlug();
    
    // Check if slug exists
    const { data: existingLink } = await supabase
      .from('links')
      .select('slug')
      .eq('slug', slug)
      .single();
      
    // If slug exists, generate a new one (unlikely but possible)
    if (existingLink) {
      slug = generateRandomSlug();
    }
    
    // Insert the new link
    const { data, error } = await supabase
      .from('links')
      .insert([{ url, slug }])
      .select()
      .single();
      
    if (error) throw new Error(error.message);
    
    // Create the short link
    const shortLink = `https://dub-sdk.vercel.app/${slug}`;
    
    return {
      shortLink,
    };
  } catch (error) {
    return {
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
