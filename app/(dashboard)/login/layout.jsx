import styles from './styles.module.css'

export const metadata = {
	title: 'Login',
	description: 'Inicio de sesión',
}

export default function LoginLayout({ children }) {
	return (
		<div style={{ minWidth: '375px' }} className={styles.body}>
			{children}
		</div>
	)
}
