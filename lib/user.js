import { getToken } from 'next-auth/jwt'
import { ErrorObject } from './error'

/**
 * Validates the user and retrieves the user data from the request.
 * @param {NextRequest} req - The request object.
 * @returns {Promise<Object>} The user data.
 * @throws {ErrorObject} If the user validation fails or the user is unauthorized.
 */
export async function validateUser(req) {
	const token = await getToken({ req })
	if (!token)
		throw new ErrorObject({ message: 'Unauthorized', statusCode: 401 })
	return token
}
