import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { createEventAction } from "@/lib/actions/events";

export default function NewEventPage() {
  return (
    <div className="mx-auto w-full max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle>Create Event</CardTitle>
        </CardHeader>
        <CardContent>
          <form action={createEventAction} className="flex flex-col gap-4">
            {/* Title Field */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                name="title"
                required
                placeholder="Team dinner..."
              />
            </div>

            {/* Description Field */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea
                id="description"
                name="description"
                placeholder="Optional details about the event"
              />
            </div>

            {/* Location Field */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                name="location"
                placeholder="Optional location"
              />
            </div>

            {/* Date and Time Field */}
            <div className="flex flex-col gap-2">
              <Label htmlFor="eventDate">Date and time</Label>
              <Input id="eventDate" name="eventDate" type="datetime-local" />
              <p className="text-sm text-[var(--muted-foreground)]">
                Optional, you can set this later.
              </p>
            </div>

            {/* Form Actions */}
            <div className="flex items-center gap-3">
              <Button type="submit">Create event</Button>
              <Button type="button" variant="outline">
                <Link href="/dashboard">Cancel</Link>
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
