"use client";

import { useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Eye, EyeOff, KeyRound } from "lucide-react";
import AuthField from "../AuthField/AuthField";
import FormAlert from "../FormAlert/FormAlert";
import FormSpinner from "../FormSpinner/FormSpinner";
import { recoverPasswordAction } from "@/app/actions/auth";
import styles from "../RegistrationForm/RegistrationForm.module.scss";
import localStyles from "./ResetPasswordForm.module.scss";

const FOCUS_ORDER = ["password", "confirmPassword"];

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

function validatePassword(value) {
    if (!value) return "Crie uma senha.";
    if (value.length < 8) return "A senha precisa ter no minimo 8 caracteres.";
    return "";
}

function validateConfirm(value, password) {
    if (!value) return "Confirme sua senha.";
    if (value !== password) return "As senhas precisam ser iguais.";
    return "";
}

export default function ResetPasswordForm() {
    const searchParams = useSearchParams();
    const token = searchParams?.get("token");
    const email = searchParams?.get("email");

    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState("");
    const [success, setSuccess] = useState(false);

    if (!token || !email) {
        return (
            <section className={styles.panel}>
                <div className={`${styles.form} ${localStyles.invalidWrap}`}>
                    <FormAlert variant="error">
                        Link de redefinicao invalido ou incompleto. Solicite um novo link de recuperacao.
                    </FormAlert>

                    <p className={styles.loginLink}>
                        <Link href="/forgot-password">Solicitar novo link</Link>
                    </p>
                </div>
            </section>
        );
    }

    const handlePasswordChange = (event) => {
        const value = event.target.value;
        setPassword(value);
        setFormError("");
        if (touched.password) {
            setErrors((current) => ({
                ...current,
                password: validatePassword(value),
                confirmPassword: confirmPassword
                    ? validateConfirm(confirmPassword, value)
                    : current.confirmPassword,
            }));
        }
    };

    const handleConfirmChange = (event) => {
        const value = event.target.value;
        setConfirmPassword(value);
        setFormError("");
        if (touched.confirmPassword) {
            setErrors((current) => ({
                ...current,
                confirmPassword: validateConfirm(value, password),
            }));
        }
    };

    const handleBlur = (event) => {
        const { name } = event.target;
        setTouched((current) => ({ ...current, [name]: true }));
        setErrors((current) => ({
            ...current,
            password: name === "password" ? validatePassword(password) : current.password,
            confirmPassword:
                name === "confirmPassword"
                    ? validateConfirm(confirmPassword, password)
                    : current.confirmPassword,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const validation = {
            password: validatePassword(password),
            confirmPassword: validateConfirm(confirmPassword, password),
        };

        setTouched({ password: true, confirmPassword: true });
        setErrors(validation);
        setFormError("");

        if (Object.values(validation).some(Boolean)) {
            focusFirstError(validation);
            return;
        }

        try {
            setIsSubmitting(true);
            const result = await recoverPasswordAction({
                email,
                token,
                password,
                confirmPassword,
            });

            if (result?.fieldErrors) {
                setErrors((current) => ({ ...current, ...result.fieldErrors }));
                setTouched((current) => {
                    const next = { ...current };
                    Object.keys(result.fieldErrors).forEach((key) => {
                        next[key] = true;
                    });
                    return next;
                });
                focusFirstError(result.fieldErrors);
                return;
            }

            if (result?.error) {
                setFormError(result.error);
                return;
            }

            if (result?.success) {
                setSuccess(true);
            }
        } catch (err) {
            const message = err?.message ?? "";
            if (message.includes("NEXT_REDIRECT")) {
                throw err;
            }
            setFormError("Nao foi possivel redefinir a senha agora.");
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

    if (success) {
        return (
            <section className={styles.panel}>
                <div className={`${styles.form} ${localStyles.successWrap}`}>
                    <FormAlert variant="success">
                        Senha redefinida com sucesso! Use sua nova senha para acessar a conta.
                    </FormAlert>

                    <p className={styles.loginLink}>
                        <Link href="/login">Ir para o login</Link>
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
                    <p>Crie uma nova senha forte para sua conta.</p>
                </div>

                <AuthField
                    label="Nova senha"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    placeholder="Minimo 8 caracteres"
                    onChange={handlePasswordChange}
                    onBlur={handleBlur}
                    icon={KeyRound}
                    error={touched.password ? errors.password : ""}
                    isValid={touched.password && !errors.password && password.length > 0}
                    autoComplete="new-password"
                    trailingAction={renderPasswordToggle(showPassword, () => setShowPassword((value) => !value))}
                />

                <AuthField
                    label="Confirmar nova senha"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    placeholder="Repita a nova senha"
                    onChange={handleConfirmChange}
                    onBlur={handleBlur}
                    icon={KeyRound}
                    error={touched.confirmPassword ? errors.confirmPassword : ""}
                    isValid={touched.confirmPassword && !errors.confirmPassword && confirmPassword.length > 0}
                    autoComplete="new-password"
                    trailingAction={renderPasswordToggle(showConfirmPassword, () => setShowConfirmPassword((value) => !value))}
                />

                <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                    aria-busy={isSubmitting}
                >
                    {isSubmitting ? <FormSpinner /> : null}
                    {isSubmitting ? "Redefinindo..." : "Redefinir senha"}
                </button>

                <p className={styles.loginLink}>
                    <Link href="/forgot-password">Solicitar novo link</Link>
                </p>
            </form>
        </section>
    );
}
