"use client"
import React, { useEffect } from "react"
import styles from "./modal.module.css"

const Modal = ({ isOpen, closeModal, children }) => {
	useEffect(() => {
		if (isOpen) {
			// Modal açıldığında body'e overflow: hidden ekle
			document.body.style.overflow = "hidden"
		} else {
			// Modal kapandığında body'den overflow: hidden kaldır
			document.body.style.overflow = "auto"
		}

		// Component unmount olduğunda da overflow'ü eski haline getir
		return () => {
			document.body.style.overflow = "auto"
		}
	}, [isOpen]) // isOpen değiştiğinde çalışır

	if (!isOpen) return null // Modal kapanmışsa hiçbir şey render edilmesin

	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modalContent}>
				<button onClick={closeModal} className={styles.closeButton}>
					&times;
				</button>
				{children}
			</div>
		</div>
	)
}

export default Modal
