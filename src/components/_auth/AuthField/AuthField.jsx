"use client";

import { CircleAlert, CircleCheckBig } from "lucide-react";
import styles from "./AuthField.module.scss";

export default function AuthField({
    label,
    name,
    type = "text",
    value,
    placeholder,
    onChange,
    onBlur,
    icon: Icon,
    error,
    isValid,
    trailingAction,
    autoComplete,
    inputMode,
    max,
    min,
}) {
    const helperId = `${name}-helper`;

    return (
        <div className={styles.fieldWrap}>
            <label
                htmlFor={name}
                className={`${styles.field} ${error ? styles.error : ""} ${isValid ? styles.valid : ""}`}
            >
                <div className={styles.leadingIcon}>
                    <Icon size={20} strokeWidth={1.8} />
                </div>

                <div className={styles.content}>
                    <span className={styles.label}>{label}</span>

                    <input
                        id={name}
                        name={name}
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        onChange={onChange}
                        onBlur={onBlur}
                        autoComplete={autoComplete}
                        inputMode={inputMode}
                        max={max}
                        min={min}
                        aria-invalid={Boolean(error)}
                        aria-describedby={error ? helperId : undefined}
                    />
                </div>

                <div className={styles.actions}>
                    {isValid && !error ? (
                        <span className={styles.validIcon} aria-hidden="true">
                            <CircleCheckBig size={20} strokeWidth={2.4} />
                        </span>
                    ) : null}

                    {trailingAction ? trailingAction : null}
                </div>
            </label>

            {error ? (
                <p id={helperId} className={styles.errorText} role="alert">
                    <CircleAlert size={14} strokeWidth={2} aria-hidden="true" />
                    <span>{error}</span>
                </p>
            ) : null}
        </div>
    );
}
