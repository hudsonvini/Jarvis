"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./CoursesShowcase.module.scss";

gsap.registerPlugin(ScrollTrigger);

const courses = [
	{
		id: 1,
		type: "large",
		title: "WEBDESIGN",
		hours: "10 H",
		professor: "Hudson Vini Bandeira Veloso",
		level: "Avançado",
		description:
			"Aprenda a criar interfaces modernas, visuais impactantes e experiências digitais com linguagem premium e direção criativa profissional.",
		image: "/images/jarvis/course-webdesign.png",
	},
	{
		id: 2,
		type: "small",
		title: "DESENVOLVIMENTO",
		hours: "20 H",
		label: "Trilha",
		professor: "Hudson Vini",
		image: "/images/jarvis/course-dev.png",
	},
	{
		id: 3,
		type: "small",
		title: "CS:GO NOOB AO PRO",
		hours: "20 H",
		label: "Trilha",
		professor: "Hudson Vini",
		image: "/images/jarvis/course-csgo.png",
	},
];

export default function CoursesShowcase() {

	return (
		<section className={styles.coursesSection}>
			<div className={styles.titleSection}>

            </div>
		</section>
	);
}