"use client";

import Navbar from "@/components/_global/Navbar/Navbar";
import AuthShell from "@/components/_auth/AuthShell/AuthShell";
import AuthShowcasePanel from "@/components/_auth/AuthShowcasePanel/AuthShowcasePanel";
import ForgotPasswordForm from "@/components/_auth/ForgotPasswordForm/ForgotPasswordForm";
import styles from "./page.module.scss";

export default function ForgotPasswordPage() {
    return (
        <div className={styles.page}>
            <Navbar
                logoSrc="/images/logo.png"
                logoAlt="Javis"
            />

            <AuthShell
                titleBadge="Recuperar Senha"
                visual={<AuthShowcasePanel />}
            >
                <ForgotPasswordForm />
            </AuthShell>
        </div>
    );
}
