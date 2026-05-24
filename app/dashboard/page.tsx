import { getSession } from "@/lib/auth/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session?.data?.user) {
    redirect("/auth/sign-in");
  }

  return (
    <div className="flex flex-1 flex-col gap-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Your Events</h1>
          <p className="text-sm text-[var(--muted-foreground)]">
            Track and manage your events.
          </p>
        </div>
        <Button>
          <Link href="/events/new">Create Event</Link>
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>No events yet</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-[var(--muted-foreground)]">
            Create your first event to start collecting RSVPs.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
