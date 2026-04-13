const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const registrationInitialValues = {
    fullName: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
    acceptTerms: false,
    acceptPromos: false,
};

export const loginInitialValues = {
    email: "",
    password: "",
    rememberMe: false,
};

export function sanitizeWhitespace(value = "") {
    return value.replace(/\s+/g, " ").trim();
}

export function formatPhoneNumber(value = "") {
    const digits = value.replace(/\D/g, "").slice(0, 11);

    if (digits.length <= 2) return digits ? `(${digits}` : "";
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
    if (digits.length <= 11) {
        return `(${digits.slice(0, 2)}) ${digits.slice(2, 3)} ${digits.slice(3, 7)}-${digits.slice(7)}`;
    }

    return digits;
}

export function validateRegistrationField(name, value, values) {
    switch (name) {
        case "fullName": {
            const normalized = sanitizeWhitespace(value);
            const parts = normalized.split(" ").filter(Boolean);

            if (!normalized) return "Informe seu nome completo.";
            if (parts.length < 2) return "Digite nome e sobrenome.";
            if (parts.some((part) => part.length < 2)) {
                return "Use ao menos 2 letras em cada nome.";
            }

            return "";
        }

        case "phone": {
            const digits = value.replace(/\D/g, "");

            if (!digits) return "Informe seu WhatsApp.";
            if (digits.length !== 11) return "Digite um celular com DDD.";

            return "";
        }

        case "email": {
            const normalized = value.trim().toLowerCase();

            if (!normalized) return "Informe seu e-mail.";
            if (!emailRegex.test(normalized)) return "Digite um e-mail valido.";

            return "";
        }

        case "password": {
            if (!value) return "Crie uma senha.";
            if (value.length < 8) return "A senha precisa ter no minimo 8 caracteres.";
            if (!/[A-Z]/.test(value)) return "Inclua pelo menos uma letra maiuscula.";
            if (!/[a-z]/.test(value)) return "Inclua pelo menos uma letra minuscula.";
            if (!/\d/.test(value)) return "Inclua pelo menos um numero.";

            return "";
        }

        case "confirmPassword": {
            if (!value) return "Confirme sua senha.";
            if (value !== values.password) return "As senhas precisam ser iguais.";

            return "";
        }

        case "acceptTerms":
            return value ? "" : "Voce precisa aceitar os termos para continuar.";

        default:
            return "";
    }
}

export function validateRegistration(values) {
    return {
        fullName: validateRegistrationField("fullName", values.fullName, values),
        phone: validateRegistrationField("phone", values.phone, values),
        email: validateRegistrationField("email", values.email, values),
        password: validateRegistrationField("password", values.password, values),
        confirmPassword: validateRegistrationField("confirmPassword", values.confirmPassword, values),
        acceptTerms: validateRegistrationField("acceptTerms", values.acceptTerms, values),
    };
}

export function buildRegistrationPayload(values) {
    return {
        fullName: sanitizeWhitespace(values.fullName),
        phone: values.phone.replace(/\D/g, ""),
        email: values.email.trim().toLowerCase(),
        password: values.password,
        acceptTerms: Boolean(values.acceptTerms),
        acceptPromos: Boolean(values.acceptPromos),
    };
}

export function validateLoginField(name, value) {
    switch (name) {
        case "email": {
            const normalized = value.trim().toLowerCase();

            if (!normalized) return "Informe seu e-mail.";
            if (!emailRegex.test(normalized)) return "Digite um e-mail valido.";

            return "";
        }

        case "password":
            if (!value) return "Informe sua senha.";
            if (value.length < 8) return "Sua senha parece incompleta.";
            return "";

        default:
            return "";
    }
}

export function validateLogin(values) {
    return {
        email: validateLoginField("email", values.email),
        password: validateLoginField("password", values.password),
    };
}

export function buildLoginPayload(values) {
    return {
        email: values.email.trim().toLowerCase(),
        password: values.password,
        rememberMe: Boolean(values.rememberMe),
    };
}
