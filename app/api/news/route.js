// eslint-disable-next-line no-unused-vars
import { NextRequest, NextResponse } from 'next/server'
// eslint-disable-next-line no-unused-vars
import { Schema, ValidationError } from 'yup'
import prisma from '../../../lib/prisma'
import { ErrorObject } from '../../../lib/error'
import { newsSchema } from './schema'
import { addNews } from '../../../services/news'
import { validateUser } from '../../../lib/user'

/**
 * Handles the GET request for retrieving news data.
 * @returns {NextResponse} The response object containing the news data.
 */
export async function GET() {
	const data = await prisma.news.findMany()
	return NextResponse.json({ data })
}

/**
 * Handles the POST request for adding news.
 * @param {NextRequest} req - The request object.
 * @returns {NextResponse} The response object.
 */
export async function POST(req) {
	try {
		const { userId } = await validateUser(req)
		const validatedNews = await validateRequest(req, newsSchema)
		validatedNews.authorId = userId
		const news = await addNews(validatedNews)
		return NextResponse.json({ data: news }, { status: 201 })
	} catch (ex) {
		return NextResponse.json(
			{ message: ex.message, errors: ex.errors },
			{ status: ex.statusCode }
		)
	}
}

/**
 * Validates the request body against a schema.
 * @param {NextRequest} req req - The request object.
 * @param {Schema} schema - The validation schema.
 * @returns {Promise<object>} The validated data.
 * @throws {ErrorObject} If the validation fails.
 */
async function validateRequest(req, schema) {
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
		}
		throw error
	}
}
