"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { CalendarDays, Eye, EyeOff, IdCard, KeyRound, Mail, Phone, UserRound } from "lucide-react";
import AuthCheckbox from "../AuthCheckbox/AuthCheckbox";
import AuthField from "../AuthField/AuthField";
import AuthSocialButtons from "../AuthSocialButtons/AuthSocialButtons";
import FormAlert from "../FormAlert/FormAlert";
import FormSpinner from "../FormSpinner/FormSpinner";
import {
    buildRegistrationPayload,
    formatCpf,
    formatPhoneNumber,
    registrationInitialValues,
    validateRegistration,
    validateRegistrationField,
} from "../authForm.utils";
import styles from "./RegistrationForm.module.scss";

const fieldIcons = {
    fullName: UserRound,
    phone: Phone,
    cpf: IdCard,
    dataNascimento: CalendarDays,
    email: Mail,
    password: KeyRound,
    confirmPassword: KeyRound,
};

const FOCUS_ORDER = [
    "fullName",
    "phone",
    "cpf",
    "dataNascimento",
    "email",
    "password",
    "confirmPassword",
    "acceptTerms",
];

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

function getTodayISO() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
}

export default function RegistrationForm({ onSubmit }) {
    const [values, setValues] = useState(registrationInitialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState("");
    const [validationHint, setValidationHint] = useState("");

    const visibleErrors = useMemo(() => {
        return Object.fromEntries(
            Object.entries(errors).filter(([key, value]) => touched[key] && value)
        );
    }, [errors, touched]);

    const todayISO = useMemo(() => getTodayISO(), []);

    const setFieldValue = (name, nextValue) => {
        setValues((current) => {
            const updated = { ...current, [name]: nextValue };

            setErrors((currentErrors) => ({
                ...currentErrors,
                [name]: validateRegistrationField(name, updated[name], updated),
                ...(name === "password"
                    ? {
                        confirmPassword: updated.confirmPassword
                            ? validateRegistrationField("confirmPassword", updated.confirmPassword, updated)
                            : currentErrors.confirmPassword,
                    }
                    : {}),
            }));

            return updated;
        });
    };

    const handleChange = (event) => {
        const { name, type, checked, value } = event.target;
        const nextValue = type === "checkbox" ? checked : value;

        setFormError("");
        setValidationHint("");

        if (name === "phone") {
            setFieldValue(name, formatPhoneNumber(nextValue));
            return;
        }

        if (name === "cpf") {
            setFieldValue(name, formatCpf(nextValue));
            return;
        }

        setFieldValue(name, nextValue);
    };

    const handleBlur = (event) => {
        const { name, type, checked, value } = event.target;
        const nextValue = type === "checkbox" ? checked : value;

        setTouched((current) => ({ ...current, [name]: true }));
        setErrors((current) => ({
            ...current,
            [name]: validateRegistrationField(name, nextValue, values),
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validation = validateRegistration(values);
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
        const payload = buildRegistrationPayload(values);

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
                setValidationHint("Cadastro validado no front e pronto para integrar com a API.");
            }
        } catch (error) {
            const message = error?.message ?? "";
            if (message.includes("NEXT_REDIRECT")) {
                throw error;
            }
            setFormError("Nao foi possivel concluir o cadastro agora.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const renderPasswordToggle = (isVisible, onToggle) => (
        <button
            type="button"
            className={styles.iconButton}
            onClick={onToggle}
            aria-label={isVisible ? "Ocultar senha" : "Mostrar senha"}
        >
            {isVisible ? <EyeOff size={20} strokeWidth={2} /> : <Eye size={20} strokeWidth={2} />}
        </button>
    );

    return (
        <section className={styles.panel}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
                {formError ? <FormAlert variant="error">{formError}</FormAlert> : null}

                <AuthField
                    label="Nome e sobrenome"
                    name="fullName"
                    value={values.fullName}
                    placeholder="Hudson Vini"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    icon={fieldIcons.fullName}
                    error={visibleErrors.fullName}
                    isValid={touched.fullName && !errors.fullName && values.fullName.trim().length > 0}
                    autoComplete="name"
                />

                <AuthField
                    label="Whatsapp"
                    name="phone"
                    value={values.phone}
                    placeholder="(86) 9 9400-0000"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    icon={fieldIcons.phone}
                    error={visibleErrors.phone}
                    isValid={touched.phone && !errors.phone && values.phone.length > 0}
                    autoComplete="tel"
                />

                <AuthField
                    label="CPF"
                    name="cpf"
                    value={values.cpf}
                    placeholder="000.000.000-00"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    icon={fieldIcons.cpf}
                    error={visibleErrors.cpf}
                    isValid={touched.cpf && !errors.cpf && values.cpf.length > 0}
                    autoComplete="off"
                    inputMode="numeric"
                />

                <AuthField
                    label="Data de nascimento"
                    name="dataNascimento"
                    type="date"
                    value={values.dataNascimento}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    icon={fieldIcons.dataNascimento}
                    error={visibleErrors.dataNascimento}
                    isValid={touched.dataNascimento && !errors.dataNascimento && values.dataNascimento.length > 0}
                    autoComplete="bday"
                    max={todayISO}
                />

                <AuthField
                    label="E-mail"
                    name="email"
                    type="email"
                    value={values.email}
                    placeholder="hudsonvini26@gmail.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    icon={fieldIcons.email}
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
                    icon={fieldIcons.password}
                    error={visibleErrors.password}
                    isValid={touched.password && !errors.password && values.password.length > 0}
                    autoComplete="new-password"
                    trailingAction={renderPasswordToggle(showPassword, () => setShowPassword((value) => !value))}
                />

                <AuthField
                    label="Confirmar senha"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={values.confirmPassword}
                    placeholder="********"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    icon={fieldIcons.confirmPassword}
                    error={visibleErrors.confirmPassword}
                    isValid={
                        touched.confirmPassword &&
                        !errors.confirmPassword &&
                        values.confirmPassword.length > 0
                    }
                    autoComplete="new-password"
                    trailingAction={renderPasswordToggle(showConfirmPassword, () => {
                        setShowConfirmPassword((value) => !value);
                    })}
                />

                <div className={styles.checks}>
                    <AuthCheckbox
                        name="acceptTerms"
                        checked={values.acceptTerms}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={visibleErrors.acceptTerms}
                        label={
                            <>
                                Aceito os <a href="#">Termos de servico</a>, <a href="#">Politicas de
                                privacidade</a>
                            </>
                        }
                    />

                    <AuthCheckbox
                        name="acceptPromos"
                        checked={values.acceptPromos}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label="Aceito receber promocoes e acoes de publicidade"
                    />
                </div>

                <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                >
                    {isSubmitting ? <FormSpinner /> : null}
                    {isSubmitting ? "Validando..." : "Cadastrar-se"}
                </button>

                {validationHint ? <p className={styles.submitMessage}>{validationHint}</p> : null}

                <div className={styles.separator}>
                    <span />
                    <strong>cadastre-se com</strong>
                    <span />
                </div>

                <AuthSocialButtons />

                <p className={styles.loginLink}>
                    ja tem conta? <Link href="/login">Login</Link>
                </p>
            </form>
        </section>
    );
}
