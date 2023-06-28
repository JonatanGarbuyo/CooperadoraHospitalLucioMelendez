import '../../styles/login.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Login',
	description: 'Inicio de sesión',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className}`}>{children}</body>
		</html>
	)
}
