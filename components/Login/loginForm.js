'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn } from 'next-auth/react'
import Image from 'next/image'

import spinner from '../../public/icons/loading.svg'

import loginSchema from './schema'

import styles from './login.module.css'

export default function LoginForm() {
	const router = useRouter()
	const [loading, setLoading] = useState(false)
	const [data, setData] = useState({ email: '', password: '' })

	function onChange(event) {
		const key = event.target.name
		const value = event.target.value
		setData({ ...data, [key]: value })
	}

	async function handleReset() {
		setData({ email: '', password: '' })
		router.push('/')
	}
	async function handleSubmit(event) {
		event.preventDefault()
		setLoading(true)
		try {
			const { email, password } = await loginSchema.validate(data, {
				stripUnknown: true,
			})
			const { error, url } = await signIn('credentials', {
				email,
				password,
				redirect: false,
			})
			if (error) {
				throw new Error('Usuario y/o contraseña incorrectos')
			}
			router.push(url)
		} catch (error) {
			setLoading(false)
			alert('error: ' + error.message)
		}
	}

	return (
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
				<button
					type="submit"
					className={`${styles.btn} ${styles.btn_access}`}
					id="btn-access"
				>
					{loading ? (
						<Image
							src={spinner}
							height="16"
							width="16"
							className={styles.spinner}
							alt="loading spinner"
						/>
					) : (
						'Acceder'
					)}
				</button>
				<button
					type="reset"
					id="btn-comeback"
					className={`${styles.btn} ${styles.btn_comeback}`}
					onClick={handleReset}
				>
					Volver
				</button>
			</form>
		</div>
	)
}
