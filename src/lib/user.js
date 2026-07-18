import "server-only";

import { cache } from "react";
import { authGet } from "@/lib/api";
import { getSession } from "@/lib/session";

function mapApiUser(api) {
  return {
    id: api.email.toLowerCase(),
    name: api.name,
    email: api.email,
    role: "student",
  };
}

export const getAuthenticatedUser = cache(async () => {
  const token = await getSession();
  if (!token) return null;

  const result = await authGet("/auth");
  if (!result.data) {
    console.warn("[user] getAuthenticatedUser falhou:", result.error);
    return null;
  }
  return mapApiUser(result.data);
});
