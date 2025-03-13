import { usePathname } from "next/navigation"
import Image from "next/image"
import styles from "./mainSelectCard.module.css"
import Link from "next/link"

const MainSelectCard = ({ card }) => {
	return (
		<Link href={card.path}>
			<div className={styles.cardContainer}>
				<Image src={card.image} fill alt={card.title} className={styles.cardImage} />

				{/* Karartma Efekti */}
				<div className={styles.overlay} style={{ backgroundColor: card.color }}></div>

				{/* Ortadaki Yazı */}
				<div className={styles.text}>{card.title}</div>
			</div>
		</Link>
	)
}

export default MainSelectCard
