import React from "react"
import Sidebar from "../Sidebar/Sidebar"
import styles from "./customLayout.module.css" // CSS modülü içe aktarıldı

const CustomLayout = ({ children }) => {
	return (
		<div className={styles.layoutContainer}>
			<Sidebar />
			<main className={styles.mainContent}>{children}</main>
		</div>
	)
}

export default CustomLayout
