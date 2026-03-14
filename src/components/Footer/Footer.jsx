import style from  './Footer.module.scss'

export default function Footer() {
    return (
        <section className={style.container}>
            <div className={style.bottomBar} />

            <div className={style.footerMark}>
                <div className={style.footerPattern} />
                <div className={style.footerLogo}><img src="/images/min-logo.svg" alt="Min Logo" /></div>
            </div>
        </section>
    )
}