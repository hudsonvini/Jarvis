import { CircleAlert, CircleCheckBig } from "lucide-react";
import styles from "./FormAlert.module.scss";

export default function FormAlert({ variant = "error", children }) {
    if (!children) return null;

    const isError = variant === "error";
    const role = isError ? "alert" : "status";
    const ariaLive = isError ? "assertive" : "polite";
    const Icon = isError ? CircleAlert : CircleCheckBig;
    const className = isError ? styles.error : styles.success;

    return (
        <div className={`${styles.alert} ${className}`} role={role} aria-live={ariaLive}>
            <Icon size={18} strokeWidth={2.2} className={styles.icon} aria-hidden="true" />
            <span>{children}</span>
        </div>
    );
}
