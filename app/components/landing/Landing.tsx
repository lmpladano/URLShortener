import {
  ArrowRight,
  BarChart3,
  Link2,
  LockKeyhole,
  Share2,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    title: "Public links",
    description:
      "Share short links anywhere while keeping management tied to your account.",
    icon: Share2,
  },
  {
    title: "Private dashboard",
    description:
      "Only you can view, organize, and delete the links you create.",
    icon: LockKeyhole,
  },
  {
    title: "Secure ownership",
    description:
      "Every link is connected to a signed-in user and protected by the API.",
    icon: ShieldCheck,
  },
];

export default function Landing() {
  return (
    <main className="bg-background">
      <section className="mx-auto flex w-full flex-col gap-14 py-16 md:px-10 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex flex-col items-start gap-6">
            <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-muted-foreground">
              <Link2 className="size-4" />
              Public short links, private management
            </div>

            <div className="space-y-5">
              <h1 className="max-w-3xl text-4xl font-semibold tracking-normal text-foreground md:text-6xl">
                Create public short links. Manage them privately.
              </h1>
              <p className="max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
                Shorten URLs, share them anywhere, and keep your link history
                tied to your account.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full">
                <a href="/login">
                  Start shortening
                  <ArrowRight />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full"
              >
                <a href="/login">Sign in</a>
              </Button>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-4 shadow-xs">
            <div className="rounded-md border bg-background p-4">
              <div className="mb-4 flex items-center justify-between border-b pb-3">
                <div>
                  <p className="text-sm font-medium">Dashboard preview</p>
                  <p className="text-xs text-muted-foreground">
                    Your private link workspace
                  </p>
                </div>
                <div className="rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
                  Signed in
                </div>
              </div>

              <div className="mb-4 flex gap-2 rounded-md border p-2">
                <div className="flex-1 truncate rounded-sm bg-muted px-3 py-2 text-sm text-muted-foreground">
                  https://example.com/very/long/product-launch-url
                </div>
                <Button size="sm">Shorten</Button>
              </div>

              <div className="space-y-2">
                <div className="grid grid-cols-[1fr_auto] gap-3 rounded-md border p-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">
                      yourl.app/music
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      spotify.com/playlist/new-release-mix
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <BarChart3 className="size-4" />
                    42
                  </div>
                </div>
                <div className="grid grid-cols-[1fr_auto] gap-3 rounded-md border p-3">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium">
                      yourl.app/demo
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      github.com/luis/urlshortener
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <BarChart3 className="size-4" />
                    18
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card key={feature.title} className="rounded-lg">
                <CardHeader>
                  <div className="mb-3 flex size-10 items-center justify-center rounded-md border bg-background">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardContent />
              </Card>
            );
          })}
        </div>
      </section>
    </main>
  );
}
