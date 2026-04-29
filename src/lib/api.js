import "server-only";

import { getSession, deleteSession } from "@/lib/session";
import { redirect } from "next/navigation";

const API_URL = process.env.API_URL;
if (!API_URL) {
  throw new Error("Variavel de ambiente API_URL nao configurada.");
}

export async function authFetch(path, options) {
  const token = await getSession();

  if (!token) {
    redirect("/login");
  }

  const headers = {
    Authorization: `Bearer ${token}`,
    ...(options?.body && { "Content-Type": "application/json" }),
    ...(process.env.NODE_ENV === "development" && {
      "ngrok-skip-browser-warning": "true",
    }),
    ...options?.headers,
  };

  let res;
  try {
    res = await fetch(`${API_URL}${path}`, {
      ...options,
      headers,
    });
  } catch {
    return { error: "network" };
  }

  if (res.status === 401) {
    await deleteSession();
    redirect("/login");
  }

  let data;
  try {
    data = await res.json();
  } catch {
    return { error: "Resposta inesperada do servidor." };
  }

  if (!res.ok) {
    return {
      error: data?.message || data?.msg || "Erro desconhecido",
      statusCode: res.status,
    };
  }

  return { data };
}

export async function authGet(path) {
  return authFetch(path, { method: "GET" });
}

export async function authPost(path, body) {
  return authFetch(path, {
    method: "POST",
    body: JSON.stringify(body),
  });
}
