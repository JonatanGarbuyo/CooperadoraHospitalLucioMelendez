import { ValidationError } from 'yup'
import { ErrorObject } from './error'

/**
 * Validates the request body against a schema.
 * @param {NextRequest} req req - The request object.
 * @param {Schema} schema - The validation schema.
 * @returns {Promise<object>} The validated data.
 * @throws {ErrorObject} If the validation fails.
 */
export async function validateRequest(req, schema) {
	try {
		const body = await req.json()
		return await schema.validate(body, {
			stripUnknown: true,
			abortEarly: false,
		})
	} catch (ex) {
		const error = new ErrorObject({ message: ex.message })
		if (ex instanceof ValidationError || ex instanceof SyntaxError) {
			error.statusCode = 400
			error.errors = [ex.errors]
		}
		throw error
	}
}
