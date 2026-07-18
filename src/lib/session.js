import "server-only";
import { cookies } from "next/headers";

const FALLBACK_MAX_AGE = 60 * 60 * 24;
const MIN_MAX_AGE = 60;
const COOKIE_NAME = "session_token";

function parseExpiresAt(expiresAt) {
  const match = String(expiresAt ?? "").match(
    /^(\d{2})\/(\d{2})\/(\d{4}),\s*(\d{2}):(\d{2}):(\d{2})$/
  );
  if (!match) return null;

  const [, day, month, year, hours, minutes, seconds] = match;
  const isoString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}-03:00`;
  const expDate = new Date(isoString);

  if (isNaN(expDate.getTime())) return null;

  const maxAge = Math.floor((expDate.getTime() - Date.now()) / 1000);
  return maxAge > MIN_MAX_AGE ? maxAge : null;
}

export async function createSession(token, expiresAt) {
  const maxAge = parseExpiresAt(expiresAt);

  if (maxAge === null) {
    console.warn(
      `[session] parseExpiresAt falhou para: "${expiresAt}". Usando fallback de 24h.`,
    );
  }

  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: maxAge ?? FALLBACK_MAX_AGE,
  });
}

export async function getSession() {
  const cookieStore = await cookies();
  return cookieStore.get(COOKIE_NAME)?.value ?? null;
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}
