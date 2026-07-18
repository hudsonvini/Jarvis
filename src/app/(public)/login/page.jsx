"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/_global/Navbar/Navbar";
import AuthShell from "@/components/_auth/AuthShell/AuthShell";
import AuthShowcasePanel from "@/components/_auth/AuthShowcasePanel/AuthShowcasePanel";
import LoginForm from "@/components/_auth/LoginForm/LoginForm";
import FormAlert from "@/components/_auth/FormAlert/FormAlert";
import { loginAction } from "@/app/actions/auth";
import styles from "./page.module.scss";

function LoginContent() {
    const params = useSearchParams();
    const registered = params?.get("registered") === "true";

    const handleLoginSubmit = async (payload) => {
        return await loginAction(payload);
    };

    const banner = registered ? (
        <FormAlert variant="success">
            Conta criada com sucesso! Faca login para continuar.
        </FormAlert>
    ) : null;

    return (
        <AuthShell
            titleBadge="Login"
            visual={<AuthShowcasePanel />}
        >
            <LoginForm onSubmit={handleLoginSubmit} topBanner={banner} />
        </AuthShell>
    );
}

export default function LoginPage() {
    return (
        <div className={styles.page}>
            <Navbar
                logoSrc="/images/logo.png"
                logoAlt="Javis"
            />

            <Suspense fallback={null}>
                <LoginContent />
            </Suspense>
        </div>
    );
}
