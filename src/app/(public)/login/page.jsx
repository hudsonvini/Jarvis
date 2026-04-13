"use client";

import Navbar from "@/components/_global/Navbar/Navbar";
import AuthShell from "@/components/_auth/AuthShell/AuthShell";
import AuthShowcasePanel from "@/components/_auth/AuthShowcasePanel/AuthShowcasePanel";
import LoginForm from "@/components/_auth/LoginForm/LoginForm";
import styles from "./page.module.scss";

export default function LoginPage() {
    return (
        <div className={styles.page}>
            <Navbar
                logoSrc="/images/logo.png"
                logoAlt="Javis"
            />

            <AuthShell
                titleBadge="Login"
                visual={<AuthShowcasePanel />}
            >
                <LoginForm />
            </AuthShell>
        </div>
    );
}
