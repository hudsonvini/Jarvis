import { redirect } from "next/navigation";
import Navbar from "@/components/_member/Navbar/Navbar";
import { getAuthenticatedUser } from "@/lib/user";
import styles from "./layout.module.scss";

export default async function MemberLayout({ children }) {
    const user = await getAuthenticatedUser();
    if (!user) {
        redirect("/login");
    }

    return (
        <div className={styles.shell}>
            <Navbar user={user} />
            <div className={styles.content}>{children}</div>
        </div>
    );
}
