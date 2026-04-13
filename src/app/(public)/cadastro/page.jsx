"use client";

import Navbar from "@/components/_global/Navbar/Navbar";
import AuthShell from "@/components/_auth/AuthShell/AuthShell";
import AuthShowcasePanel from "@/components/_auth/AuthShowcasePanel/AuthShowcasePanel";
import RegistrationForm from "@/components/_auth/RegistrationForm/RegistrationForm";
import styles from "./page.module.scss";

export default function CadastroPage() {
    return (
        <div className={styles.page}>
            <Navbar
                logoSrc="/images/logo.png"
                logoAlt="Javis"
            />

            <AuthShell
                titleBadge="Cadastro"
                visual={<AuthShowcasePanel />}
            >
                <RegistrationForm />
            </AuthShell>
        </div>
    );
}
