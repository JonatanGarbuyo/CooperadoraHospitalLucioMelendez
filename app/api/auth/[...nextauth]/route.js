import NextAuth from 'next-auth'
import bcrypt from 'bcrypt'
import CredentialsProvider from 'next-auth/providers/credentials'
import prisma from '../../../../lib/prisma'

const handler = NextAuth({
	session: {
		strategy: 'jwt',
		maxAge: 30 * 24 * 60 * 60, // 30 days
	},
	providers: [
		CredentialsProvider({
			// The name to display on the sign in form (e.g. 'Sign in with...')
			id: 'credentials',
			type: 'credentials',
			name: 'Email',
			// You can pass any HTML attribute to the <input> tag through the object.
			credentials: {
				email: {
					label: 'E-mail',
					type: 'email',
					placeholder: 'usuario@ejemplo.com',
				},
				password: { label: 'Contraseña', type: 'password' },
			},

			async authorize(credentials, req) {
				const { email, password } = credentials
				const user = await prisma.user.findUnique({ where: { email } })
				const isValidPassword = await bcrypt.compare(password, user.password)
				return isValidPassword ? user : null
			},
		}),
	],

	callbacks: {
		async jwt({ token, user, trigger }) {
			if (trigger === 'signIn') {
				token.role = user?.role
				token.userId = user?.id
			}
			return token
		},
	},

	pages: {
		error: '/dashboard/login',
	},
})

export { handler as GET, handler as POST }
