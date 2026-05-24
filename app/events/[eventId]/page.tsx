import { notFound } from "next/navigation";
import { getSession } from "@/lib/auth/server";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createInviteLinkAction } from "@/lib/actions/events";

export default async function EventDetailPage({
  params,
}: {
  params: Promise<{ eventId: string }>;
}) {
  const { eventId } = await params;
  const session = await getSession();
  const userId = session?.data?.user?.id;

  const event = await prisma.event.findUnique({
    where: { id: eventId },
    include: {
      invite: true,
      rsvps: {
        orderBy: { respondedAt: "desc" },
      },
    },
  });

  if (!event) {
    notFound();
  }

  const isOwner = event.ownerUserId === userId;

  const goingCount = event.rsvps.filter((r) => r.status === "going").length;
  const maybeCount = event.rsvps.filter((r) => r.status === "maybe").length;
  const notGoingCount = event.rsvps.filter(
    (r) => r.status === "not_going",
  ).length;

  const inviteUrl = event.invite?.token
    ? `${process.env.NEXT_PUBLIC_APP_URL}/invite/${event.invite.token}`
    : null;

  const createInviteForThisEvent = createInviteLinkAction.bind(null, eventId);

  return (
    <div className="flex flex-col gap-6">
      {/* Event Header */}
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            {event.title}
          </h1>
          <p className="text-sm text-[var(--muted-foreground)]">
            {event.eventDate
              ? new Date(event.eventDate).toLocaleString()
              : "No date set"}
            {event.location ? ` — ${event.location}` : ""}
          </p>
        </div>
        <Button variant="outline">
          <Link href="/dashboard">Back to Dashboard</Link>
        </Button>
      </div>

      {/* Description */}
      {event.description && (
        <p className="text-sm text-[var(--muted-foreground)]">
          {event.description}
        </p>
      )}

      {/* RSVP Counts */}
      <div className="flex flex-wrap gap-2">
        <Badge>Going: {goingCount}</Badge>
        <Badge variant="secondary">Maybe: {maybeCount}</Badge>
        <Badge variant="outline">Not Going: {notGoingCount}</Badge>
      </div>

      {/* Invite Link Section - only for owner */}
      {isOwner && (
        <Card>
          <CardHeader>
            <CardTitle>Invite Link</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-[var(--muted-foreground)]">
              Share this link with guests so they can RSVP without creating an
              account.
            </p>
            {inviteUrl ? (
              <div className="flex flex-col gap-2">
                <p className="text-sm font-medium break-all bg-[var(--muted)] p-2 rounded">
                  {inviteUrl}
                </p>
                <form action={createInviteForThisEvent}>
                  <Button type="submit" variant="outline" size="sm">
                    Regenerate Link
                  </Button>
                </form>
              </div>
            ) : (
              <form action={createInviteForThisEvent}>
                <Button type="submit">Generate Link</Button>
              </form>
            )}
          </CardContent>
        </Card>
      )}

      {/* Attendees Table */}
      {/* Attendees Table */}
      <Card>
        <CardHeader>
          <CardTitle>Attendees</CardTitle>
        </CardHeader>
        <CardContent>
          {event.rsvps.length === 0 ? (
            <p className="text-sm text-[var(--muted-foreground)]">
              No RSVPs yet. Share the invite link to get responses.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="text-left py-2 pr-4 font-medium">Name</th>
                    <th className="text-left py-2 pr-4 font-medium">Email</th>
                    <th className="text-left py-2 pr-4 font-medium">Status</th>
                    <th className="text-left py-2 font-medium">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {event.rsvps.map((rsvp) => (
                    <tr
                      key={rsvp.id}
                      className="border-b border-[var(--border)] last:border-0"
                    >
                      <td className="py-2 pr-4">{rsvp.name}</td>
                      <td className="py-2 pr-4 text-[var(--muted-foreground)]">
                        {rsvp.email}
                      </td>
                      <td className="py-2 pr-4">
                        <Badge
                          variant={
                            rsvp.status === "going"
                              ? "default"
                              : rsvp.status === "maybe"
                                ? "secondary"
                                : "outline"
                          }
                        >
                          {rsvp.status === "not_going"
                            ? "Not Going"
                            : rsvp.status === "going"
                              ? "Going"
                              : "Maybe"}
                        </Badge>
                      </td>
                      <td className="py-2 text-[var(--muted-foreground)]">
                        {new Date(rsvp.respondedAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
