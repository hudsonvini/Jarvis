"use client";

import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useRef, useState } from "react";
import { googleLoginAction } from "@/app/actions/auth";
import FormAlert from "../FormAlert/FormAlert";
import styles from "./GoogleSignInButton.module.scss";

const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID ?? "";

function GoogleLoginButton() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const isSubmitting = useRef(false);

    async function handleSuccess(credentialResponse) {
        if (isSubmitting.current) return;

        if (!credentialResponse?.credential) {
            setError("Nao foi possivel obter as credenciais do Google.");
            return;
        }

        isSubmitting.current = true;
        setLoading(true);
        setError(null);

        try {
            const result = await googleLoginAction(credentialResponse.credential);
            if (result?.error) {
                setError(result.error);
            }
        } catch (err) {
            const message = err?.message ?? "";
            if (message.includes("NEXT_REDIRECT")) {
                throw err;
            }
        } finally {
            setLoading(false);
            isSubmitting.current = false;
        }
    }

    function handleError() {
        setError("Erro ao conectar com o Google. Tente novamente.");
    }

    return (
        <div className={styles.wrap}>
            <div
                className={`${styles.googleButton} ${loading ? styles.loading : ""}`}
                role="button"
                aria-label="Entrar com Google"
                aria-busy={loading}
            >
                <img
                    src="/google.svg"
                    alt=""
                    className={styles.googleIcon}
                />

                <GoogleLogin
                    onSuccess={handleSuccess}
                    onError={handleError}
                    size="large"
                    width={400}
                    containerProps={{
                        className: styles.googleIframeOverlay,
                    }}
                />

                {loading ? (
                    <div className={styles.loadingOverlay} aria-hidden="true">
                        <span className={styles.spinner} />
                    </div>
                ) : null}
            </div>

            {error ? <FormAlert variant="error">{error}</FormAlert> : null}
        </div>
    );
}

export default function GoogleSignInButton() {
    if (!clientId) {
        return null;
    }

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <GoogleLoginButton />
        </GoogleOAuthProvider>
    );
}
