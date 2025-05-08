'use client';
import { SignIn } from '@clerk/nextjs';
import { dark } from '@clerk/themes';
import { useTheme } from 'next-themes';
import { useAuth } from '@clerk/nextjs';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { HeroHeader } from '@/components/hero-section';
export default function SignInPage() {
  const { theme } = useTheme();
  const { isLoaded, userId } = useAuth();
  const router = useRouter();
  
  useEffect(() => {
    if (isLoaded && userId) {
      router.push('/dashboard');
    }
  }, [isLoaded, userId, router]);

  if (isLoaded && userId) {
    return null; // Don't render anything if already authenticated
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="w-full">
        <HeroHeader />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <SignIn
          appearance={{
            baseTheme: theme === 'dark' ? dark : undefined,
            elements: {
              rootBox: 'w-full max-w-[440px]',
              card: 'bg-background shadow-none overflow-visible',
              header: 'text-foreground',
              headerTitle: 'text-2xl font-semibold',
              headerSubtitle: 'text-muted-foreground',
              socialButtonsBlockButton: 'bg-background border border-input hover:bg-accent text-foreground',
              socialButtonsBlockButtonText: 'text-foreground font-medium',
              dividerLine: 'bg-input',
              dividerText: 'text-muted-foreground',
              formFieldLabel: 'text-foreground',
              formFieldInput: 'bg-background border border-input',
              footerActionLink: 'text-primary hover:text-primary/90',
              formButtonPrimary: theme === 'dark' ? 'bg-white text-black hover:bg-gray-100' : 'bg-black text-white hover:bg-black/90',
              footerAction: 'flex items-center justify-center gap-1',
              main: 'overflow-visible',
              footer: "hidden", //badge
            },
          }}
          redirectUrl="/dashboard"
          afterSignInUrl="/dashboard"
          signUpUrl="/sign-up"
        />
      </div>
    </div>
  );
} 