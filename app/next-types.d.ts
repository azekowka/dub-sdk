// Declare Next.js PageProps to fix type error
declare module "next" {
  interface PageProps {
    params: {
      [key: string]: string;
    };
    searchParams?: {
      [key: string]: string | string[] | undefined;
    };
  }
} 