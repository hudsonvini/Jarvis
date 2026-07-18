"use client";

import { useState, useEffect } from "react";
import styles from "./SidebarShell.module.scss";

export default function SidebarShell({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        function handleToggle() {
            setIsOpen((prev) => !prev);
        }

        window.addEventListener("toggle-sidebar", handleToggle);
        return () => window.removeEventListener("toggle-sidebar", handleToggle);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    return (
        <>
            <div
                className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ""}`}
                onClick={() => setIsOpen(false)}
                onKeyDown={(e) => { if (e.key === "Escape") setIsOpen(false); }}
                role="button"
                tabIndex={isOpen ? 0 : -1}
                aria-label="Fechar barra lateral"
            />
            <aside className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}>
                {children}
            </aside>
        </>
    );
}
