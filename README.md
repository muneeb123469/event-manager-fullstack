# Event Planner App

A production-ready full-stack event management web application where users can create events, generate shareable invite links, and track RSVPs in real time.

🌐 **Live Demo:** https://event-manager-fullstack-3cb3.vercel.app

---

## Features

- 🔐 **Authentication** — Secure sign up, sign in and sign out via Neon Auth
- 📅 **Event Management** — Create events with title, description, location and date
- 🔗 **Shareable Invite Links** — Generate unique token-based URLs for each event
- ✅ **RSVP System** — Guests can RSVP (Going/Maybe/Not Going) without an account
- 📊 **Attendee Tracking** — Real-time table showing all RSVPs with status
- 👤 **Account Settings** — Update profile information
- 🛡️ **Protected Routes** — Dashboard and events pages require authentication

---

## Tech Stack

| Technology              | Purpose                         |
| ----------------------- | ------------------------------- |
| Next.js 15 (App Router) | Full-stack React framework      |
| TypeScript              | Type-safe JavaScript            |
| Tailwind CSS            | Utility-first styling           |
| shadcn/ui               | UI component library            |
| PostgreSQL (Neon)       | Managed cloud database          |
| Prisma ORM              | Database queries and migrations |
| Neon Auth               | Authentication system           |
| Vercel                  | Deployment and hosting          |

---

## Getting Started

### Prerequisites

- Node.js 18+
- A [Neon](https://neon.tech) account (free tier works)

### Installation

1. Clone the repository:
   \```bash
   git clone https://github.com/muneeb123469/event-manager-fullstack.git
   cd event-manager-fullstack
   \```

2. Install dependencies:
   \```bash
   npm install
   \```

3. Set up environment variables — create a `.env` file in the root:
   \```env
   DATABASE_URL="your_neon_connection_string"
   NEON_AUTH_BASE_URL="your_neon_auth_base_url"
   NEON_AUTH_COOKIE_SECRET="your_cookie_secret"
   NEXT_PUBLIC_APP_URL="http://localhost:3000"
   \```

4. Run database migrations:
   \```bash
   npx prisma migrate dev
   \```

5. Start the development server:
   \```bash
   npm run dev
   \```

6. Open [http://localhost:3000](http://localhost:3000)

---

## Project Structure

app/
account/ # Account settings pages
api/auth/ # Auth API route handler
auth/ # Sign in / Sign up pages
dashboard/ # User dashboard
events/ # Event creation and detail pages
invite/ # Public RSVP pages
components/
ui/ # shadcn/ui components
lib/
actions/ # Server actions (create event, RSVP)
auth/ # Auth client and server setup
prisma.ts # Prisma client instance
prisma/
schema.prisma # Database schema

---

## Database Schema

- **events** — Stores event details (title, description, location, date)
- **event_invites** — Stores unique invite tokens per event
- **event_rsvps** — Stores guest RSVPs with attendance status

---

## Author

**Muneeb Ahmad**

- GitHub: [@muneeb123469](https://github.com/muneeb123469)

---

## License

MIT License
