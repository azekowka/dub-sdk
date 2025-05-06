"use client"
import {
    CardTitle,
    CardDescription,
    CardHeader,
    Card,
  } from "@/components/ui/card";
  import CardForm from "@/components/form";
  
  export default function Page() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
        <Card className="w-full max-w-md overflow-hidden shadow-lg border border-border">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">URL Shortener</CardTitle>
            <CardDescription>
              Paste your long URL and get a short, easy-to-share link using dub-sdk.vercel.app
            </CardDescription>
          </CardHeader>
          <CardForm />
        </Card>
      </div>
    );
  }