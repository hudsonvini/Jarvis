"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, KeyRound, Mail } from "lucide-react";
import AuthCheckbox from "../AuthCheckbox/AuthCheckbox";
import AuthField from "../AuthField/AuthField";
import AuthSocialButtons from "../AuthSocialButtons/AuthSocialButtons";
import {
    buildLoginPayload,
    loginInitialValues,
    validateLogin,
    validateLoginField,
} from "../authForm.utils";
import styles from "../RegistrationForm/RegistrationForm.module.scss";

export default function LoginForm({ onSubmit }) {
    const [values, setValues] = useState(loginInitialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState("");

    const visibleErrors = useMemo(() => {
        return Object.fromEntries(
            Object.entries(errors).filter(([key, value]) => touched[key] && value)
        );
    }, [errors, touched]);

    const setFieldValue = (name, nextValue) => {
        setValues((current) => {
            const updated = { ...current, [name]: nextValue };

            setErrors((currentErrors) => ({
                ...currentErrors,
                [name]: validateLoginField(name, updated[name]),
            }));

            return updated;
        });
    };

    const handleChange = (event) => {
        const { name, type, checked, value } = event.target;
        const nextValue = type === "checkbox" ? checked : value;

        setSubmitMessage("");
        setFieldValue(name, nextValue);
    };

    const handleBlur = (event) => {
        const { name, type, checked, value } = event.target;
        const nextValue = type === "checkbox" ? checked : value;

        setTouched((current) => ({ ...current, [name]: true }));
        setErrors((current) => ({
            ...current,
            [name]: validateLoginField(name, nextValue),
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validation = validateLogin(values);
        const allTouched = Object.keys(validation).reduce(
            (accumulator, key) => ({ ...accumulator, [key]: true }),
            {}
        );

        setTouched((current) => ({ ...current, ...allTouched }));
        setErrors(validation);

        if (Object.values(validation).some(Boolean)) {
            setSubmitMessage("Revise os campos destacados para continuar.");
            return;
        }

        const payload = buildLoginPayload(values);

        try {
            setIsSubmitting(true);

            if (onSubmit) {
                await onSubmit(payload);
            } else {
                await new Promise((resolve) => window.setTimeout(resolve, 650));
            }

            setSubmitMessage("Login validado no front e pronto para integrar com a API.");
        } catch {
            setSubmitMessage("Nao foi possivel concluir o login agora.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={styles.panel}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <AuthField
                    label="E-mail"
                    name="email"
                    type="email"
                    value={values.email}
                    placeholder="hudsonvini26@gmail.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    icon={Mail}
                    error={visibleErrors.email}
                    isValid={touched.email && !errors.email && values.email.trim().length > 0}
                    autoComplete="email"
                />

                <AuthField
                    label="Senha"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={values.password}
                    placeholder="********"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    icon={KeyRound}
                    error={visibleErrors.password}
                    isValid={touched.password && !errors.password && values.password.length > 0}
                    autoComplete="current-password"
                    trailingAction={
                        <button
                            type="button"
                            className={styles.iconButton}
                            onClick={() => setShowPassword((value) => !value)}
                            aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                        >
                            {showPassword ? (
                                <EyeOff size={20} strokeWidth={2} />
                            ) : (
                                <Eye size={20} strokeWidth={2} />
                            )}
                        </button>
                    }
                />

                <div className={styles.checks}>
                    <AuthCheckbox
                        name="rememberMe"
                        checked={values.rememberMe}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Manter minha sessao conectada"
                    />
                </div>

                <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                    {isSubmitting ? "Validando..." : "Entrar"}
                </button>

                {submitMessage ? <p className={styles.submitMessage}>{submitMessage}</p> : null}

                <div className={styles.separator}>
                    <span />
                    <strong>entre com</strong>
                    <span />
                </div>

                <AuthSocialButtons />

                <p className={styles.loginLink}>
                    ainda nao tem conta? <Link href="/cadastro">Cadastre-se</Link>
                </p>
            </form>
        </section>
    );
}
