"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail } from "lucide-react";
import AuthField from "../AuthField/AuthField";
import FormAlert from "../FormAlert/FormAlert";
import FormSpinner from "../FormSpinner/FormSpinner";
import { forgotPasswordAction } from "@/app/actions/auth";
import styles from "../RegistrationForm/RegistrationForm.module.scss";
import localStyles from "./ForgotPasswordForm.module.scss";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function focusField(name) {
    const el = document.getElementById(name);
    if (el && typeof el.focus === "function") {
        el.focus();
    }
}

export default function ForgotPasswordForm() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");
    const [touched, setTouched] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState("");
    const [success, setSuccess] = useState(false);

    const validate = (val) => {
        const normalized = val.trim().toLowerCase();
        if (!normalized) return "Informe seu e-mail.";
        if (!emailRegex.test(normalized)) return "Digite um e-mail valido.";
        return "";
    };

    const handleChange = (event) => {
        setEmail(event.target.value);
        setFormError("");
        if (touched) {
            setError(validate(event.target.value));
        }
    };

    const handleBlur = () => {
        setTouched(true);
        setError(validate(email));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validationError = validate(email);
        if (validationError) {
            setTouched(true);
            setError(validationError);
            setFormError("");
            focusField("email");
            return;
        }

        setError("");
        setFormError("");

        try {
            setIsSubmitting(true);
            const result = await forgotPasswordAction(email.trim().toLowerCase());

            if (result?.error) {
                setFormError(result.error);
                return;
            }

            if (result?.fieldErrors?.email) {
                setError(result.fieldErrors.email);
                setTouched(true);
                focusField("email");
                return;
            }

            setSuccess(true);
        } catch (err) {
            const message = err?.message ?? "";
            if (message.includes("NEXT_REDIRECT")) {
                throw err;
            }
            setFormError("Nao foi possivel enviar o link agora.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (success) {
        return (
            <section className={styles.panel}>
                <div className={`${styles.form} ${localStyles.successWrap}`}>
                    <FormAlert variant="success">
                        Verifique sua caixa de e-mail. Se houver uma conta com este e-mail,
                        voce recebera as instrucoes para redefinir sua senha em alguns instantes.
                    </FormAlert>

                    <p className={styles.loginLink}>
                        <Link href="/login">Voltar ao login</Link>
                    </p>
                </div>
            </section>
        );
    }

    return (
        <section className={styles.panel}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
                {formError ? <FormAlert variant="error">{formError}</FormAlert> : null}

                <div className={localStyles.intro}>
                    <p>
                        Digite seu e-mail e enviaremos um link para voce redefinir sua senha.
                    </p>
                </div>

                <AuthField
                    label="E-mail"
                    name="email"
                    type="email"
                    value={email}
                    placeholder="seu@email.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    icon={Mail}
                    error={touched ? error : ""}
                    isValid={touched && !error && email.trim().length > 0}
                    autoComplete="email"
                />

                <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                >
                    {isSubmitting ? <FormSpinner /> : null}
                    {isSubmitting ? "Enviando..." : "Enviar link de recuperacao"}
                </button>

                <p className={styles.loginLink}>
                    Lembrou da senha? <Link href="/login">Voltar ao login</Link>
                </p>
            </form>
        </section>
    );
}
