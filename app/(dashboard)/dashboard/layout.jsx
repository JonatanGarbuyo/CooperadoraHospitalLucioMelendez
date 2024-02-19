import Image from 'next/image'
import { Inter } from 'next/font/google'

import styles from './layout.module.css'
import './main.css'
import LoginButton from '@/components/Dashboard/LoginButton'
import Providers from '@/context/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Dashboard',
	description: 'Creating an admin dashboard',
}

export default function Layout({ children }) {
	return (
		<html lang="es">
			<body className={`${inter.className} ${styles.body}`}>
				<Providers>
					<header className={styles.header}>
						<nav className={styles.navigation}>
							<Image
								className=""
								height="80"
								width="300"
								src="/images/coop_logo_2.png"
								alt="Asociacion Cooperadora Lucio Melendez logo"
							/>

							<LoginButton />
						</nav>
					</header>
					<div className={styles.content}>{children}</div>
				</Providers>
			</body>
		</html>
	)
}
