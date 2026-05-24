import { AccountView } from "@neondatabase/auth/react";

export default async function AccountPage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const { path } = await params;

  return (
    <main className="container p-4 md:p-6">
      <AccountView path={path} />
    </main>
  );
}
