import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col gap-12">
      {/* Hero Section */}
      <section className="flex flex-col gap-6 py-12">
        <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Plan events and track RSVPs fast
        </h1>
        <p className="max-w-2xl text-lg text-[var(--muted-foreground)]">
          Create events, share a unique invite link, and watch attendee
          responses come in — Going, Maybe, and Not Going — all in one place.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button>
            <Link href="/auth/sign-up">Create account</Link>
          </Button>
          <Button variant="outline">
            <Link href="/auth/sign-in">Sign in</Link>
          </Button>
          <Button variant="ghost">
            <Link href="/dashboard">Open dashboard</Link>
          </Button>
        </div>
      </section>

      {/* How it works Section */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="text-3xl">📅</div>
              <CardTitle>1. Create an event</CardTitle>
              <CardDescription>
                Add a title, description, location and date in seconds.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="text-3xl">🔗</div>
              <CardTitle>2. Share invite link</CardTitle>
              <CardDescription>
                Generate a unique link and send it to guests via WhatsApp,
                email, or any platform.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="text-3xl">✅</div>
              <CardTitle>3. Track RSVPs</CardTitle>
              <CardDescription>
                See who is Going, Maybe, or Not Going in real time from your
                dashboard.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold tracking-tight">Features</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>No account needed for guests</CardTitle>
              <CardDescription>
                Guests can RSVP using just their name and email — no sign up
                required.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Secure authentication</CardTitle>
              <CardDescription>
                Event owners sign in securely via Neon Auth with email OTP
                support.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Real-time attendee list</CardTitle>
              <CardDescription>
                View a live table of all RSVPs with name, email, status and
                response date.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shareable invite links</CardTitle>
              <CardDescription>
                Each event gets a unique token-based invite URL that can be
                regenerated anytime.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col gap-4 py-8 border-t border-[var(--border)]">
        <h2 className="text-2xl font-semibold tracking-tight">
          Ready to plan your first event?
        </h2>
        <p className="text-[var(--muted-foreground)]">
          Create a free account and get started in minutes.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button>
            <Link href="/auth/sign-up">Get started free</Link>
          </Button>
          <Button variant="outline">
            <Link href="/dashboard">View dashboard</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
