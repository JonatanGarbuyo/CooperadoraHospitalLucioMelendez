import { redirect } from 'next/navigation'
import { getServerSession } from 'next-auth'

import LoginForm from '../../components/Login/loginForm'
import { authOptions } from '../api/auth/[...nextauth]/route'

export default async function Page() {
	const session = await getServerSession(authOptions)
	if (session) {
		redirect('/dashboard')
	}

	return (
		<main>
			<LoginForm />
		</main>
	)
}
