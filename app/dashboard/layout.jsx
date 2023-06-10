import Image from 'next/image'
import { Inter } from 'next/font/google'

import styles from './layout.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Dashboard',
	description: 'Creating an admin dashboard',
}

export default function Layout({ children }) {
	return (
		<html lang="es">
			<body className={`${inter.className} ${styles.body}`}>
				<header className={styles.header}>
					<nav className={styles.navigation}>
						<Image
							className=""
							height="100"
							width="400"
							src="/images/coop_logo_2.png"
							alt="Asociacion Cooperadora Lucio Melendez logo"
						/>
						<ul className={styles.list}>
							<li>Elemento 1</li>
							<li>Elemento 2</li>
							<li>Elemento 3</li>
							<li>Elemento 4</li>
						</ul>
					</nav>
				</header>
				<div className={styles.content}>{children}</div>
			</body>
		</html>
	)
}
