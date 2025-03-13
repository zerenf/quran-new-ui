import React from "react"
import styles from "./reminding.module.css"

const Reminding = () => {
	return (
		<div className={styles.container}>
			<p className={styles.title}>HATIRLATMA</p>
			<p className={styles.text}>
				Kıymetli ziyaretçimiz, <br /> Kur'an'ın herhangi bir dildeki meali (çevirisi) hiçbir zaman Kur'an'ın aslı değildir. Kur'an kendine
				özgün bir dil yapısına sahiptir. İnsanlar Kur'an'ın benzerini getirmekte aciz oldukları gibi onu başka bir dile tas tamam aktarma
				hususunda da acizdirler. <br /> Bu sebeple meal ile yetinmeyip mutlaka ayetlerle alakalı rivayetlere, sebebi nüzullere, tefsirlere
				bakmak ayetleri daha iyi ve doğru anlamaya yardımcı olacaktır.
			</p>
		</div>
	)
}

export default Reminding
