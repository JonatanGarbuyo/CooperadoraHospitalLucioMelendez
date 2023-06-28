'use client'
import Image from 'next/image'
import styles from './login.module.css'
import { useState } from 'react'
import * as Yup from 'yup'

const loginSchema = Yup.object().shape({
	email: Yup.string().email().required('El email es un campo requerido'),
	password: Yup.string()
		.required('La clave es un campo requerido')
		.min(8, 'El mínimo requerido es de 8 caracteres')
		.max(32, 'El máximo permitido son 32 caracteres'),
})

export default function Page() {
	const [data, setData] = useState({ email: '', password: '' })

	function onChange(event) {
		const key = event.target.name
		const value = event.target.value

		setData({ ...data, [key]: value })
	}

	async function handleSubmit(event) {
		event.preventDefault()

		try {
			await loginSchema.validate(data)
			fetch('/api/login', { method: 'POST', body: data })
		} catch (error) {
			alert(error.message)
		}
	}
	return (
		<main>
			<div className={styles.maincard}>
				<Image
					className=""
					height="80"
					width="300"
					src="/images/coop_logo_2.png"
					alt="Asociacion Cooperadora Lucio Melendez logo"
				/>
				<form onSubmit={handleSubmit} className={styles.form}>
					<h1 className={styles.h1_title}>Iniciar sesión</h1>
					<p className={styles.p_info}>
						Coloca aqui tus credenciales para acceder a la plataforma.
					</p>
					<label htmlFor="email">Correo electrónico</label>
					<input
						type="email"
						className={styles.input}
						name="email"
						id="email"
						placeholder="info@cooperadora.com"
						value={data.email}
						onChange={onChange}
					/>
					<label htmlFor="password">Contraseña</label>
					<input
						type="password"
						className={styles.input}
						name="password"
						id="password"
						placeholder="********"
						value={data.password}
						onChange={onChange}
					/>
					<button type="submit" className={styles.btn_access} id="btn-access">
						Acceder
					</button>
					<button
						type="reset"
						id="btn-comeback"
						className={styles.btn_comeback}
					>
						Volver
					</button>
				</form>
			</div>
		</main>
	)
}
