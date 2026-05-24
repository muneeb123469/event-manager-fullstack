import { getSession } from "@/lib/auth/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { prisma } from "@/lib/prisma";
import { Badge } from "@/components/ui/badge";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session?.data?.user) {
    redirect("/auth/sign-in");
  }

  const userId = session.data.user.id;

  const events = await prisma.event.findMany({
    where: { ownerUserId: userId },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      eventDate: true,
      location: true,
      rsvps: { select: { status: true } },
    },
  });

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

      {events.length === 0 ? (
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
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {events.map((event) => {
            const goingCount = event.rsvps.filter(
              (r) => r.status === "going",
            ).length;
            const maybeCount = event.rsvps.filter(
              (r) => r.status === "maybe",
            ).length;
            const notGoingCount = event.rsvps.filter(
              (r) => r.status === "not_going",
            ).length;

            return (
              <Card key={event.id}>
                <CardHeader className="space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <CardTitle className="text-lg">{event.title}</CardTitle>
                    <Button size="sm">
                      <Link href={`/events/${event.id}`}>Open</Link>
                    </Button>
                  </div>
                  {event.eventDate && (
                    <p className="text-xs text-[var(--muted-foreground)]">
                      {new Date(event.eventDate).toLocaleString()}
                      {event.location ? ` — ${event.location}` : ""}
                    </p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    <Badge>Going: {goingCount}</Badge>
                    <Badge variant="secondary">Maybe: {maybeCount}</Badge>
                    <Badge variant="outline">Not Going: {notGoingCount}</Badge>
                  </div>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
