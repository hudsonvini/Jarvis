"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, ArrowRight, CalendarDays, Check, Clock3, Users } from "lucide-react";
import Navbar from "@/components/_global/Navbar/Navbar";
import FooterReveal from "@/components/_global/FooterReveal/FooterReveal";
import { birthdayCalendarDays, birthdayPackages } from "@/data/birthdayRental";
import styles from "./page.module.scss";

export default function BirthdayReservationPage() {
	const { packageId } = useParams();
	const selectedPackage = useMemo(
		() => birthdayPackages.find((pack) => pack.id === packageId) || birthdayPackages[0],
		[packageId]
	);
	const availableDays = birthdayCalendarDays.filter((day) => day.status !== "booked");
	const [selectedDay, setSelectedDay] = useState(availableDays[0]);
	const [selectedSlot, setSelectedSlot] = useState(availableDays[0]?.slots[0] || "");

	const handleSelectDay = (day) => {
		setSelectedDay(day);
		setSelectedSlot(day.slots[0] || "");
	};

	return (
		<>
			<Navbar logoSrc="/images/logo.png" logoAlt="Javis" />

			<main className={styles.page}>
				<section className={styles.shell}>
					<Link href="/academy/aniversario" className={styles.backLink}>
						<ArrowLeft />
						Voltar aos pacotes
					</Link>

					<div className={styles.header}>
						<span>Fluxo de reserva</span>
						<h1>{selectedPackage.name}</h1>
						<p>
							Esta tela concentra a escolha de data e horario. O proximo passo
							pode receber os dados do responsavel e integrar o gateway de
							pagamento.
						</p>
					</div>

					<div className={styles.grid}>
						<aside className={styles.summaryCard}>
							<span>Pacote escolhido</span>
							<h2>{selectedPackage.price}</h2>
							<p>{selectedPackage.description}</p>

							<div className={styles.meta}>
								<div>
									<Clock3 />
									{selectedPackage.duration}
								</div>
								<div>
									<Users />
									{selectedPackage.guests}
								</div>
							</div>

							<ul>
								{selectedPackage.features.map((feature) => (
									<li key={feature}>
										<Check />
										{feature}
									</li>
								))}
							</ul>
						</aside>

						<section className={styles.datePanel}>
							<div className={styles.panelHeader}>
								<CalendarDays />
								<div>
									<span>Maio 2026</span>
									<h2>Escolha uma data disponivel</h2>
								</div>
							</div>

							<div className={styles.daysList}>
								{availableDays.map((day) => (
									<button
										key={day.day}
										type="button"
										className={`${styles.dayButton} ${
											selectedDay?.day === day.day ? styles.selected : ""
										}`}
										onClick={() => handleSelectDay(day)}
									>
										<strong>{day.day}</strong>
										<span>{day.label}</span>
									</button>
								))}
							</div>

							<div className={styles.slotsArea}>
								<h3>Horarios disponiveis</h3>
								<div>
									{selectedDay?.slots.map((slot) => (
										<button
											key={slot}
											type="button"
											className={selectedSlot === slot ? styles.selectedSlot : ""}
											onClick={() => setSelectedSlot(slot)}
										>
											{slot}
										</button>
									))}
								</div>
							</div>

							<div className={styles.checkoutBar}>
								<p>
									<strong>{selectedDay?.day} de maio</strong>
									<span>{selectedSlot ? ` as ${selectedSlot}` : " selecione um horario"}</span>
								</p>
								<Link href="/cadastro">
									Continuar reserva
									<ArrowRight />
								</Link>
							</div>
						</section>
					</div>
				</section>
			</main>

			<FooterReveal isReady />
		</>
	);
}
