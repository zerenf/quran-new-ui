import Image from "next/image"
import mealliTumSure from "@/assets/images/main-icons-big/mealli-tum-sure.png"
import styles from "./mainSelectCard.module.css"

const MainSelectCard = ({ card }) => {
	return (
		<div className={styles.cardContainer}>
			<Image src={card.image} fill alt={card.title} className={styles.cardImage} />

			{/* Karartma Efekti */}
			<div className={styles.overlay} style={{ backgroundColor: card.color }}></div>

			{/* Ortadaki Yazı */}
			<div className={styles.text}>{card.title}</div>
		</div>
	)
}

export default MainSelectCard
