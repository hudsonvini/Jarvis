"use client";

import styles from "./AuthCheckbox.module.scss";

export default function AuthCheckbox({
    name,
    checked,
    onChange,
    onBlur,
    label,
    error,
}) {
    const helperId = `${name}-helper`;

    return (
        <div className={styles.wrap}>
            <label className={`${styles.checkbox} ${error ? styles.error : ""}`}>
                <input
                    type="checkbox"
                    name={name}
                    checked={checked}
                    onChange={onChange}
                    onBlur={onBlur}
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? helperId : undefined}
                />

                <span className={styles.box} aria-hidden="true" />
                <span className={styles.label}>{label}</span>
            </label>

            {error ? (
                <p id={helperId} className={styles.errorText}>
                    {error}
                </p>
            ) : null}
        </div>
    );
}
