import { useState } from 'react'

import Layout from '../../components/Layout'

import styles from './index.module.css'

export default function Donar() {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [message, setMessage] = useState('')
	const [submited, setSubmited] = useState(false)

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log('Sending')

		const data = {
			name,
			email,
			message,
		}

		fetch('/api/contacto', {
			method: 'POST',
			headers: {
				Accept: 'application/json, text/plain, */*',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		}).then((res) => {
			console.log('Response received')
			if (res.status === 200) {
				console.log('Response succeeded?')
				setSubmited(true)
				setName('')
				setEmail('')
				setMessage('')
			}
		})
	}

	return (
		<Layout>
			<div className={styles.form_container}>
				<section id="contacto" className={styles.contacto}>
					<h1>Contacto</h1>

					<form onSubmit={handleSubmit}>
						<div className={styles.form_div}>
							<img
								src="/icons/person-fill.svg"
								alt="Mail icon"
								className={styles.form_icon}
							/>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Ingresa tu nombre"
								autoComplete="on"
								size="50"
								required
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</div>

						<div className={styles.form_div}>
							<img
								src="/icons/envelope.svg"
								alt="Mail icon"
								className={styles.form_icon}
							/>
							<input
								type="email"
								id="email"
								name="email"
								placeholder="Tu correo electronico"
								autoComplete="on"
								required
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>

						<div className={styles.form_div}>
							<img
								src="/icons/pen.svg"
								alt="Mail icon"
								className={styles.form_icon}
							/>
							<textarea
								id="consulta"
								name="consulta"
								placeholder="Dejanos tu consulta"
								rows="10"
								cols="40"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
						</div>

						<div className={styles.submit_div}>
							<input
								className={styles.submit_button}
								type="submit"
								value="Enviar"
							></input>
						</div>

						<div>
							<p
								id="confirmation"
								className={styles.confirmation}
								style={submited ? { display: 'inline-block' } : null}
							>
								Muchas gracias. Recibimos su mensaje y responderemos en breve.
							</p>
						</div>
					</form>
				</section>
			</div>
		</Layout>
	)
}
