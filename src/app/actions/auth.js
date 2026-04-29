"use server";

import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/session";
import { isValidCpf, stripCpf } from "@/lib/cpf";

const API_URL = process.env.API_URL;
if (!API_URL) {
  throw new Error("Variavel de ambiente API_URL nao configurada.");
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const JWT_PATTERN = /^[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+\.[A-Za-z0-9_-]+$/;
const MAX_TOKEN_LENGTH = 4096;

async function apiPost(path, body) {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(process.env.NODE_ENV === "development" && {
          "ngrok-skip-browser-warning": "true",
        }),
      },
      body: JSON.stringify(body),
    });

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
  } catch {
    return { error: "network" };
  }
}

export async function loginAction(payload) {
  const email = payload?.email ?? "";
  const password = payload?.password ?? "";

  const fieldErrors = {};

  if (!email.trim() || !EMAIL_REGEX.test(email)) {
    fieldErrors.email = "Informe um e-mail válido.";
  }

  if (!password || password.length < 8) {
    fieldErrors.password = "A senha deve ter pelo menos 8 caracteres.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { fieldErrors };
  }

  const result = await apiPost("/auth/login", {
    email: email.trim().toLowerCase(),
    senha: password,
  });

  if (result.error) {
    if (result.error === "network") {
      return { error: "Erro de conexão. Tente novamente." };
    }
    return { error: "E-mail ou senha incorretos." };
  }

  if (!result.data) {
    return { error: "Resposta inesperada do servidor." };
  }

  await createSession(result.data.access_token, result.data.expiresAt);
  redirect("/cursos");
}

export async function registerAction(payload) {
  const fullName = payload?.fullName ?? "";
  const cpf = payload?.cpf ?? "";
  const dataNascimento = payload?.dataNascimento ?? "";
  const email = payload?.email ?? "";
  const password = payload?.password ?? "";
  const confirmPassword = payload?.confirmPassword ?? "";
  const acceptTerms = Boolean(payload?.acceptTerms);

  const fieldErrors = {};

  if (!fullName.trim() || fullName.trim().length < 3) {
    fieldErrors.fullName = "Informe seu nome completo.";
  }

  const cpfStripped = stripCpf(cpf);
  if (!cpfStripped || !isValidCpf(cpfStripped)) {
    fieldErrors.cpf = "Informe um CPF válido.";
  }

  if (!dataNascimento) {
    fieldErrors.dataNascimento = "Informe sua data de nascimento.";
  } else {
    const birthDate = new Date(dataNascimento);
    const today = new Date();
    const minDate = new Date("1900-01-01");
    const minAgeDate = new Date();
    minAgeDate.setFullYear(minAgeDate.getFullYear() - 13);

    if (isNaN(birthDate.getTime()) || birthDate >= today || birthDate < minDate) {
      fieldErrors.dataNascimento = "Informe uma data de nascimento válida.";
    } else if (birthDate > minAgeDate) {
      fieldErrors.dataNascimento = "Você deve ter pelo menos 13 anos.";
    }
  }

  if (!email.trim() || !EMAIL_REGEX.test(email)) {
    fieldErrors.email = "Informe um e-mail válido.";
  }

  if (!password || password.length < 8) {
    fieldErrors.password = "A senha deve ter pelo menos 8 caracteres.";
  }

  if (password !== confirmPassword) {
    fieldErrors.confirmPassword = "As senhas não conferem.";
  }

  if (!acceptTerms) {
    fieldErrors.acceptTerms = "Você deve aceitar os termos para continuar.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { fieldErrors };
  }

  const result = await apiPost("/auth/register", {
    nomeCompleto: fullName.trim(),
    email: email.trim().toLowerCase(),
    senha: password,
    dataNascimento,
    cpf: cpfStripped,
  });

  if (result.error) {
    if (result.error === "network") {
      return { error: "Erro de conexão. Tente novamente." };
    }
    return { error: "Este e-mail ou CPF já está cadastrado." };
  }

  redirect("/login?registered=true");
}

export async function forgotPasswordAction(emailInput) {
  const email = String(emailInput ?? "").trim();

  if (!email || !EMAIL_REGEX.test(email)) {
    return { fieldErrors: { email: "Informe um e-mail válido." } };
  }

  const result = await apiPost("/auth/forgot-password", {
    login: email.toLowerCase(),
  });

  if (result.error === "network") {
    return { error: "Erro de conexão. Tente novamente." };
  }

  if (process.env.NODE_ENV === "development" && result.data?.linkInDev) {
    console.log("[DEV] Link de redefinição:", result.data.linkInDev);
  }

  return { success: true };
}

export async function recoverPasswordAction(payload) {
  const email = payload?.email ?? "";
  const token = payload?.token ?? "";
  const password = payload?.password ?? "";
  const confirmPassword = payload?.confirmPassword ?? "";

  if (!email || !token) {
    return { error: "Link de redefinição inválido." };
  }

  const cleanEmail = String(email).trim().toLowerCase();
  const cleanToken = String(token).trim();

  if (!EMAIL_REGEX.test(cleanEmail)) {
    return { error: "Link de redefinição inválido." };
  }

  const fieldErrors = {};

  if (!password || password.length < 8) {
    fieldErrors.password = "A senha deve ter pelo menos 8 caracteres.";
  }

  if (password !== confirmPassword) {
    fieldErrors.confirmPassword = "As senhas não conferem.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return { fieldErrors };
  }

  const result = await apiPost("/auth/recover-password", {
    email: cleanEmail,
    token: cleanToken,
    newPassword: password,
  });

  if (result.error) {
    if (result.error === "network") {
      return { error: "Erro de conexão. Tente novamente." };
    }

    const err = result.error.toLowerCase();

    if (err.includes("não encontrado") || err.includes("nao encontrado")) {
      return { error: "Link de redefinição inválido." };
    }

    if (err.includes("inválido") || err.includes("invalido")) {
      return { error: "O link de redefinição é inválido. Solicite um novo." };
    }

    if (err.includes("expirado")) {
      return { error: "O link de redefinição expirou. Solicite um novo." };
    }

    return { error: "Erro ao redefinir senha. Tente novamente." };
  }

  return { success: true };
}

export async function googleLoginAction(googleToken) {
  const cleanToken = typeof googleToken === "string" ? googleToken.trim() : "";

  if (
    !cleanToken ||
    cleanToken.length > MAX_TOKEN_LENGTH ||
    !JWT_PATTERN.test(cleanToken)
  ) {
    return { error: "Token de autenticação inválido." };
  }

  const result = await apiPost("/auth/google-oauth2", {
    token: cleanToken,
  });

  if (result.error) {
    if (result.error === "network") {
      return { error: "Erro de conexão. Tente novamente." };
    }
    return {
      error: "Não foi possível autenticar com o Google. Tente novamente.",
    };
  }

  if (!result.data) {
    return { error: "Resposta inesperada do servidor." };
  }

  await createSession(result.data.access_token, result.data.expiresAt);
  redirect("/cursos");
}

export async function logoutAction() {
  await deleteSession();
  redirect("/login");
}
