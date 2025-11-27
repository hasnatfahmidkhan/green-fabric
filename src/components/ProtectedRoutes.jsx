"use client";

import useAuth from "@/hooks/useAuth";
import { redirect } from "next/navigation";

export default function ProtectedRoutes({ children }) {
  const { user, authLoading } = useAuth();

  if (authLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <span className="loading loading-bars loading-xl text-primary"></span>
      </div>
    );

  if (!user) redirect(`/signIn`);

  return children;
}
