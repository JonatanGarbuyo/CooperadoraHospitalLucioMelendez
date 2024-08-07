import styles from './styles.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Login',
	description: 'Inicio de sesión',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				style={{ minWidth: '375px' }}
				className={`${inter.className} ${styles.body}`}
			>
				{children}
			</body>
		</html>
	)
}
