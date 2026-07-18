"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, KeyRound, Mail } from "lucide-react";
import AuthCheckbox from "../AuthCheckbox/AuthCheckbox";
import AuthField from "../AuthField/AuthField";
import AuthSocialButtons from "../AuthSocialButtons/AuthSocialButtons";
import FormAlert from "../FormAlert/FormAlert";
import FormSpinner from "../FormSpinner/FormSpinner";
import {
    buildLoginPayload,
    loginInitialValues,
    validateLogin,
    validateLoginField,
} from "../authForm.utils";
import styles from "../RegistrationForm/RegistrationForm.module.scss";

const FOCUS_ORDER = ["email", "password"];

function focusFirstError(errors) {
    for (const fieldName of FOCUS_ORDER) {
        if (errors[fieldName]) {
            const el = document.getElementById(fieldName);
            if (el && typeof el.focus === "function") {
                el.focus();
                return;
            }
        }
    }
}

export default function LoginForm({ onSubmit, topBanner = null }) {
    const [values, setValues] = useState(loginInitialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState("");
    const [validationHint, setValidationHint] = useState("");

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

        setFormError("");
        setValidationHint("");
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
        setFormError("");

        if (Object.values(validation).some(Boolean)) {
            setValidationHint("Revise os campos destacados para continuar.");
            focusFirstError(validation);
            return;
        }

        setValidationHint("");
        const payload = buildLoginPayload(values);

        try {
            setIsSubmitting(true);

            if (onSubmit) {
                const result = await onSubmit(payload);

                if (result?.fieldErrors) {
                    setErrors((current) => ({ ...current, ...result.fieldErrors }));
                    setTouched((current) => {
                        const next = { ...current };
                        Object.keys(result.fieldErrors).forEach((key) => {
                            next[key] = true;
                        });
                        return next;
                    });
                    setValidationHint("Revise os campos destacados para continuar.");
                    focusFirstError(result.fieldErrors);
                    return;
                }

                if (result?.error) {
                    setFormError(result.error);
                    return;
                }
            } else {
                await new Promise((resolve) => window.setTimeout(resolve, 650));
                setValidationHint("Login validado no front e pronto para integrar com a API.");
            }
        } catch (error) {
            const message = error?.message ?? "";
            if (message.includes("NEXT_REDIRECT")) {
                throw error;
            }
            setFormError("Nao foi possivel concluir o login agora.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={styles.panel}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
                {topBanner ? <div className={styles.topBanner}>{topBanner}</div> : null}
                {formError ? <FormAlert variant="error">{formError}</FormAlert> : null}

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

                    <Link href="/forgot-password" className={styles.forgotLink}>
                        Esqueceu a senha?
                    </Link>
                </div>

                <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                >
                    {isSubmitting ? <FormSpinner /> : null}
                    {isSubmitting ? "Entrando..." : "Entrar"}
                </button>

                {validationHint ? <p className={styles.submitMessage}>{validationHint}</p> : null}

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
