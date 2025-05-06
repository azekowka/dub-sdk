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

// Extract the domain and path for comparison, regardless of protocol
function getURLWithoutProtocol(url: string): string {
  return url.replace(/^(https?:\/\/)?(www\.)?/, '').replace(/\/$/, '');
}

// Normalize URL for storage
function normalizeUrl(url: string): string {
  let normalizedUrl = url;
  if (!normalizedUrl.startsWith('http://') && !normalizedUrl.startsWith('https://')) {
    normalizedUrl = `https://${normalizedUrl}`;
  }
  return normalizedUrl.replace(/\/$/, '');
}

export async function shorten(_prevState: any, formData: FormData) {
  const rawUrl = formData.get("url");
  if (!rawUrl || typeof rawUrl !== "string") {
    return {
      shortLink: "Invalid URL",
    };
  }
  
  // Get versions we need to check
  const urlWithoutProtocol = getURLWithoutProtocol(rawUrl);
  const normalizedUrl = normalizeUrl(rawUrl);
  
  try {
    // Check if ANY version of this URL already exists by checking the domain part
    const { data: links } = await supabase
      .from('links')
      .select('url, slug');
    
    // Find any matching link (comparing without protocol)
    const existingLink = links?.find(link => 
      getURLWithoutProtocol(link.url) === urlWithoutProtocol
    );
    
    // If the URL already exists in any form, return the existing shortened link
    if (existingLink) {
      return {
        shortLink: `https://dub-sdk.vercel.app/${existingLink.slug}`,
      };
    }
    
    // If URL doesn't exist, generate a new slug
    let slug = generateRandomSlug();
    
    // Check if slug exists
    const { data: existingSlug } = await supabase
      .from('links')
      .select('slug')
      .eq('slug', slug)
      .maybeSingle();
      
    // If slug exists, generate a new one
    if (existingSlug) {
      slug = generateRandomSlug();
    }
    
    // Insert the new link with the normalized URL
    const { data, error } = await supabase
      .from('links')
      .insert([{ url: normalizedUrl, slug }])
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
