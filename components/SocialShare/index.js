import styles from './index.module.css'

export default function SocialShare() {
	return (
		<div className={styles.social_share}>
			<p>
				Ayudanos a llegar a mas gente. <br />
				Compartí en tus redes sociales
			</p>
			<ul className={styles.social_share_list}>
				<li className={styles.social_share_list_item}>
					<a
						href="http://www.facebook.com/sharer/sharer.php?u=https://cooperadoraluciomelendez.org.ar/Donar&amp;title=Cooperadora Lucio Melendez"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="/icons/facebook.svg"
							alt="Compartir en facebook"
							className={styles.logo}
						/>
					</a>
				</li>

				<li className={styles.social_share_list_item}>
					<a
						href="https://twitter.com/share?url=https://cooperadoraluciomelendez.org.ar/Donar&amp;title=Cooperadora Lucio Melendez"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="/icons/twitter.svg"
							alt="Compartir en Twitter"
							className={styles.logo}
						/>
					</a>
				</li>
				<li className={styles.social_share_list_item}>
					<a
						href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https://cooperadoraluciomelendez.org.ar/Donar"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="/icons/linkedin.svg"
							alt="Compartir en Linkedin"
							className={styles.logo}
						/>
					</a>
				</li>
				<li className={styles.social_share_list_item}>
					<a
						href="https://web.whatsapp.com/send?text=https://cooperadoraluciomelendez.org.ar/Donar"
						target="_blank"
						rel="noopener noreferrer"
						id="linkWA"
					>
						<img
							src="/icons/whatsapp.svg"
							alt="Compartir en Whatsapp"
							className={styles.logo}
						/>
					</a>
				</li>
				<li className={styles.social_share_list_item}>
					<a
						href="https://t.me/share/url?url=https://cooperadoraluciomelendez.org.ar/Donar"
						target="_blank"
						rel="noopener noreferrer"
						id="linkTG1"
					>
						<img
							src="/icons/telegram.svg"
							alt="Compartir en Telegram"
							className={styles.logo}
						/>
					</a>
				</li>
			</ul>
		</div>
	)
}
