"use server";

import { redirect } from "next/navigation";
import { getSession } from "../auth/server";
import { prisma } from "../prisma";

function parseCreateEvent(formData: FormData) {
  const title = String(formData.get("title") ?? "").trim();

  if (title.length < 3 || title.length > 120) {
    throw new Error("Title must be between 3 and 120 characters.");
  }

  const description = String(formData.get("description") ?? "").trim();
  const location = String(formData.get("location") ?? "").trim();
  const eventDate = String(formData.get("eventDate") ?? "").trim();

  return {
    title,
    description: description.length ? description.slice(0, 2000) : null,
    location: location.length ? location.slice(0, 200) : null,
    eventDate: eventDate.length ? eventDate : null,
  };
}

export async function createEventAction(formData: FormData) {
  const session = await getSession();
  const userId = session.data.user.id;
  const input = parseCreateEvent(formData);

  const created = await prisma.event.create({
    data: {
      ownerUserId: userId,
      title: input.title,
      description: input.description,
      location: input.location,
      eventDate: input.eventDate ? new Date(input.eventDate) : null,
    },
  });

  redirect(`/events/${created.id}`);
}

export async function createInviteLinkAction(eventId: string) {
  const session = await getSession();
  const userId = session.data.user.id;

  // Make sure only the event owner can generate invite links
  const event = await prisma.event.findUnique({
    where: { id: eventId },
  });

  if (!event || event.ownerUserId !== userId) {
    throw new Error("Unauthorized");
  }

  const token = crypto.randomUUID().replace(/-/g, "");

  await prisma.eventInvite.upsert({
    where: { eventId },
    create: { eventId, token },
    update: { token },
  });

  redirect(`/events/${eventId}`);
}
export async function submitRsvpAction(token: string, formData: FormData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const status = String(formData.get("status") ?? "").trim();

  if (!name || !email || !status) {
    throw new Error("All fields are required.");
  }

  const invite = await prisma.eventInvite.findUnique({
    where: { token },
    include: { event: true },
  });

  if (!invite) {
    throw new Error("Invite link is invalid.");
  }

  const emailNormalized = email.toLowerCase();

  await prisma.eventRsvp.upsert({
    where: {
      eventId_emailNormalized: {
        eventId: invite.event.id,
        emailNormalized,
      },
    },
    create: {
      eventId: invite.event.id,
      inviteId: invite.id,
      name,
      email,
      emailNormalized,
      status: status as "going" | "maybe" | "not_going",
    },
    update: {
      name,
      status: status as "going" | "maybe" | "not_going",
      respondedAt: new Date(),
    },
  });

  redirect(`/invite/${token}?submitted=1`);
}
