"use client"
import MainSelectCard from "./components/MainSelectCards/MainSelectCard"
import mealliTumSure from "@/assets/images/main-icons-big/mealli-tum-sure.png"
import meallAra from "@/assets/images/main-icons-big/meal-ara.png"
import kelimeAra from "@/assets/images/main-icons-big/kelime-ara.png"
import arapcaKelimeAra from "@/assets/images/main-icons-big/arapca-kelime-ara.png"
import Reminding from "./components/Reminding/Reminding"
import Modal from "./components/Modal/Modal"
import { useEffect, useState } from "react"

export default function Home() {
	const [isOpen, setIsOpen] = useState(false)

	// useEffect ile sayfa yüklendiğinde modal'ı yarım saniye sonra açıyoruz
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsOpen(true) // 0.5 saniye sonra modal açılır
		}, 500) // 500ms = 0.5 saniye

		// Temizleme işlevi: component unmount olduğunda timeout'u temizler
		return () => clearTimeout(timer)
	}, []) // Boş bağımlılık dizisi ile sadece component mount edildiğinde çalışır

	const closeModal = () => setIsOpen(false)

	const cardDatas = [
		{ title: "Mealli Tüm Sure Oku", image: mealliTumSure, color: "rgba(13, 10, 69, 0.5)" },
		{ title: "Meal Ara", image: meallAra, color: "rgba(188, 120, 26, 0.459)" },
		{ title: "Kelime Ara", image: kelimeAra, color: "rgba(18, 147, 81, 0.459)" },
		{ title: "Arapça Kelime Ara", image: arapcaKelimeAra, color: "rgba(37, 156, 220, 0.459)" },
	]
	return (
		<>
			<div className="w-screen h-screen flex justify-center items-center">
				<div className="grid grid-cols-2 justify-items-center items-center gap-4 sm:gap-10 md:gap-16 lg:gap-24 m-3">
					{cardDatas.map((card, index) => (
						<div key={index}>
							<MainSelectCard card={card} />
						</div>
					))}
				</div>
			</div>
			{/* <div className="w-screen h-auto flex justify-center items-center">
				<Reminding />
			</div> */}
			<Modal isOpen={isOpen} closeModal={closeModal}>
				<Reminding />
			</Modal>
		</>
	)
}
