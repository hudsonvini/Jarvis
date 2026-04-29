"use client";

import { Suspense } from "react";
import Navbar from "@/components/_global/Navbar/Navbar";
import AuthShell from "@/components/_auth/AuthShell/AuthShell";
import AuthShowcasePanel from "@/components/_auth/AuthShowcasePanel/AuthShowcasePanel";
import ResetPasswordForm from "@/components/_auth/ResetPasswordForm/ResetPasswordForm";
import styles from "./page.module.scss";

export default function ResetPasswordPage() {
    return (
        <div className={styles.page}>
            <Navbar
                logoSrc="/images/logo.png"
                logoAlt="Javis"
            />

            <AuthShell
                titleBadge="Redefinir Senha"
                visual={<AuthShowcasePanel />}
            >
                <Suspense fallback={null}>
                    <ResetPasswordForm />
                </Suspense>
            </AuthShell>
        </div>
    );
}
