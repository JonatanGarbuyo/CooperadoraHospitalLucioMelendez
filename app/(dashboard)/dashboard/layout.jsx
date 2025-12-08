import Image from 'next/image'
import styles from './layout.module.css'
import './main.css'
import LoginButton from '@/components/Dashboard/LoginButton'
import Providers from '@/context/providers'

export const metadata = {
	title: 'Dashboard',
	description: 'Creating an admin dashboard',
}

export default function Layout({ children }) {
	return (
		<div className={styles.body}>
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
		</div>
	)
}
