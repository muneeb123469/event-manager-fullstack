"use client";

import { NeonAuthUIProvider } from "@neondatabase/auth/react";
import { authClient } from "@/lib/auth/client";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <NeonAuthUIProvider
      authClient={authClient as any}
      defaultTheme="dark"
      emailOTP
    >
      {children}
    </NeonAuthUIProvider>
  );
}
