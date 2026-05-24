import { notFound } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { submitRsvpAction } from "@/lib/actions/events";

export default async function InvitePage({
  params,
  searchParams,
}: {
  params: Promise<{ token: string }>;
  searchParams: Promise<{ submitted?: string }>;
}) {
  const { token } = await params;
  const query = await searchParams;

  const invite = await prisma.eventInvite.findUnique({
    where: { token },
    include: {
      event: true,
    },
  });

  if (!invite) {
    notFound();
  }

  const event = invite.event;
  const submitRsvpForThisInvite = submitRsvpAction.bind(null, token);

  if (query.submitted === "1") {
    return (
      <div className="mx-auto w-full max-w-2xl">
        <Card>
          <CardHeader>
            <Badge variant="secondary" className="w-fit">
              RSVP
            </Badge>
            <CardTitle>{event.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-[var(--muted-foreground)]">
              ✅ Your RSVP has been submitted successfully! Thank you.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-2xl">
      <Card>
        <CardHeader className="space-y-3">
          <Badge variant="secondary" className="w-fit">
            RSVP
          </Badge>
          <CardTitle>{event.title}</CardTitle>
          <p className="text-sm text-[var(--muted-foreground)]">
            {event.eventDate
              ? new Date(event.eventDate).toLocaleString()
              : "No date set"}
            {event.location ? ` — ${event.location}` : ""}
          </p>
          {event.description && (
            <p className="text-sm text-[var(--muted-foreground)]">
              {event.description}
            </p>
          )}
        </CardHeader>
        <CardContent>
          <form
            action={submitRsvpForThisInvite}
            className="flex flex-col gap-4"
          >
            {/* Name Field */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Your Name</Label>
              <Input id="name" name="name" required placeholder="Ali Ahmed" />
            </div>

            {/* Email Field */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">Your Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                required
                placeholder="ali@example.com"
              />
            </div>

            {/* Attendance Status */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="status">Attendance</Label>
              <select
                id="status"
                name="status"
                required
                defaultValue="going"
                className="flex h-10 w-full rounded-md border border-[var(--border)] bg-transparent px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ring)]"
              >
                <option value="going">Going</option>
                <option value="maybe">Maybe</option>
                <option value="not_going">Not Going</option>
              </select>
            </div>

            <Button type="submit">Submit RSVP</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
