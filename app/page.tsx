import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getSession } from "@/lib/auth/server";

export default async function Home() {
  const session = await getSession();
  const user = session?.data?.user;

  return (
    <div className="flex flex-1 flex-col gap-12">
      {/* Hero Section */}
      <section className="flex flex-col gap-6 py-12">
        <div className="w-fit rounded-full border border-[var(--border)] px-3 py-1 text-sm text-[var(--muted-foreground)]">
          Next.js + Neon PostgreSQL + Prisma
        </div>

        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-5xl">
          Plan events and manage RSVPs with shareable invite links
        </h1>

        <p className="max-w-2xl text-lg text-[var(--muted-foreground)]">
          Create events, generate unique invite links, collect guest responses,
          and manage attendee details from one dashboard.
        </p>

        <div className="flex flex-wrap gap-3">
          {user ? (
            <>
              <Button asChild>
                <Link href="/dashboard">Open dashboard</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/events/new">Create event</Link>
              </Button>
            </>
          ) : (
            <>
              <Button asChild>
                <Link href="/auth/sign-up">Create account</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/auth/sign-in">Sign in</Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/dashboard">Open dashboard</Link>
              </Button>
            </>
          )}
        </div>
      </section>

      {/* How it works Section */}
      <section className="flex flex-col gap-6">
        <h2 className="text-2xl font-semibold tracking-tight">How it works</h2>

        <div className="grid gap-4 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="text-sm font-semibold text-[var(--muted-foreground)]">
                Step 01
              </div>
              <CardTitle>Create an event</CardTitle>
              <CardDescription>
                Add a title, description, location, and date for your event.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="text-sm font-semibold text-[var(--muted-foreground)]">
                Step 02
              </div>
              <CardTitle>Share invite link</CardTitle>
              <CardDescription>
                Generate a unique link and send it to guests through WhatsApp,
                email, or any platform.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="text-sm font-semibold text-[var(--muted-foreground)]">
                Step 03
              </div>
              <CardTitle>Track responses</CardTitle>
              <CardDescription>
                View who is Going, Maybe, or Not Going from the event dashboard.
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
                Guests can RSVP using only their name and email. They do not
                need to create an account.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Secure authentication</CardTitle>
              <CardDescription>
                Event owners can sign up, sign in, and access protected pages
                using Neon Auth.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Attendee management</CardTitle>
              <CardDescription>
                View RSVP records with guest name, email, attendance status, and
                response date.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Shareable invite links</CardTitle>
              <CardDescription>
                Each event gets a unique token-based invite URL that can be
                regenerated when needed.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col gap-4 border-t border-[var(--border)] py-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          Ready to plan your first event?
        </h2>

        <p className="text-[var(--muted-foreground)]">
          Create an account, set up your event, and start collecting RSVPs in
          minutes.
        </p>

        <div className="flex flex-wrap gap-3">
          {user ? (
            <>
              <Button asChild>
                <Link href="/events/new">Create event</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/dashboard">View dashboard</Link>
              </Button>
            </>
          ) : (
            <>
              <Button asChild>
                <Link href="/auth/sign-up">Get started free</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/auth/sign-in">Sign in</Link>
              </Button>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
