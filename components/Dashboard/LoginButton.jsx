'use client'

import { useSession, signIn, signOut } from 'next-auth/react'

export default function LoginButton() {
	const { data: session } = useSession()
	if (session) {
		return (
			<div className="flex gap-4">
				<p>Sesión iniciada como {session.user.name} </p>
				<button onClick={() => signOut()}>Cerrar sesión</button>
			</div>
		)
	}
	return (
		<div className="flex gap-6">
			<p>Sesión no iniciada</p>
			<button onClick={() => signIn()}>Iniciar sesión</button>
		</div>
	)
}
