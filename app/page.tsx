/**
 * v0 by Vercel.
 * @see https://v0.dev/t/ESxmUuVdh7l
 */
import {
  CardTitle,
  CardDescription,
  CardHeader,
  Card,
} from "@/components/ui/card";
import CardForm from "@/components/form";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
      <Card className="w-full max-w-md overflow-hidden shadow-lg border border-border">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Dublet</CardTitle>
          <CardDescription>
            A mini link shortener built with the{" "}
            <a
              href="https://d.to/typescript"
              target="_blank"
              className="text-primary hover:underline"
            >
              Dub TypeScript SDK
            </a>
            .<br />
            View the source code on{" "}
            <a
              href="https://git.new/dublet"
              target="_blank"
              className="text-primary hover:underline"
            >
              GitHub
            </a>
            .
          </CardDescription>
        </CardHeader>
        <CardForm />
      </Card>
    </div>
  );
}
