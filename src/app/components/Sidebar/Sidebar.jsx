"use client"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { HiHome } from "react-icons/hi2"
import { FaBookOpen } from "react-icons/fa6"
import { GiArchiveResearch } from "react-icons/gi"
import { TbMessage2Search } from "react-icons/tb"
import { PiTranslateFill } from "react-icons/pi"
import { FaCircleArrowRight } from "react-icons/fa6"
import { FaCircleArrowLeft } from "react-icons/fa6"
import styles from "./sidebar.module.css"
import Link from "next/link"

const Sidebar = () => {
	const pathname = usePathname()

	const [isSidebarOpen, setIsSidebarOpen] = useState(false)
	const menuItems = [
		{ title: "Anasayfa", icon: HiHome, path: "/" },
		{ title: "Mealli Tüm Sure Oku", icon: FaBookOpen, path: "/mealli-tum-sure-oku" },
		{ title: "Meal Ara", icon: GiArchiveResearch, path: "/meal-ara" },
		{ title: "Kelime Ara ", icon: TbMessage2Search, path: "/kelime-ara" },
		{ title: "Arapça Kelime Ara", icon: PiTranslateFill, path: "/arapca-kelime-ara" },
	]

	// Ekran genişliği 991px altına düştüğünde sidebar'ı kapat
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 768) {
				setIsSidebarOpen(false)
			} else {
				setIsSidebarOpen(true)
			}
		}

		// Pencere boyutu değiştiğinde handleResize çalışsın
		window.addEventListener("resize", handleResize)

		// İlk renderda kontrol et
		handleResize()

		// Temizleme işlevi
		return () => {
			window.removeEventListener("resize", handleResize)
		}
	}, [])

	return (
		<>
			<div className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
				{/* Sidebar açma/kapama butonu */}
				<div className={styles.toggleButton} onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
					{isSidebarOpen ? <FaCircleArrowLeft color="#616b76" size={30} /> : <FaCircleArrowRight color="#616b76" size={30} />}
				</div>

				{/* Menü öğeleri */}
				<div className={styles.menuItemsContainer}>
					{menuItems.map((item, index) => {
						const isActive = pathname === item.path

						return (
							<Link key={index} href={item.path} className={`${styles.menuItem} ${isActive ? styles.activeMenuItem : ""}`}>
								<item.icon className={styles.icon} />
								<span className={`${styles.menuItemTitle} ${!isSidebarOpen && styles.menuItemTitleHidden}`}>{item.title}</span>
							</Link>
						)
					})}
				</div>
			</div>
		</>
	)
}

export default Sidebar
